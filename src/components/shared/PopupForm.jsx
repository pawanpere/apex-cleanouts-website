import React, { useEffect, useRef, useState } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import gsap from 'gsap';
import clsx from 'clsx';

// Simple mocked form using react-hook-form
import { useForm as useHookForm } from "react-hook-form";

const PopupForm = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);
    const overlayRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useHookForm();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' });
            gsap.fromTo(modalRef.current, { opacity: 0, scale: 0.95, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power3.out', delay: 0.1 });
        } else {
            document.body.style.overflow = 'unset';
        }

        // Reset state when opened
        if (isOpen && isSuccess) {
            setIsSuccess(false);
            reset();
        }
    }, [isOpen, isSuccess, reset]);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        // Simulate API Call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Lead captured:", data);
        setIsSubmitting(false);
        setIsSuccess(true);

        // Auto-close after 3 seconds on success
        setTimeout(() => {
            onClose();
        }, 3000);
    };

    const handleBackdropClick = (e) => {
        if (e.target === overlayRef.current) onClose();
    };

    if (!isOpen) return null;

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 bg-[#0a2918]/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 overflow-y-auto pt-20 pb-20"
            onClick={handleBackdropClick}
        >
            <div
                ref={modalRef}
                className="bg-white rounded-3xl w-full max-w-[550px] shadow-2xl overflow-hidden relative"
                role="dialog"
                aria-modal="true"
            >
                {/* Header Ribbon */}
                <div className="h-2 w-full bg-[#22C55E]"></div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full p-2 transition-colors"
                    aria-label="Close modal"
                >
                    <X size={20} />
                </button>

                <div className="p-8 md:p-10">
                    {isSuccess ? (
                        <div className="flex flex-col items-center justify-center text-center py-10 space-y-4">
                            <div className="w-20 h-20 bg-green-100 text-[#22C55E] rounded-full flex items-center justify-center mb-4">
                                <CheckCircle size={40} />
                            </div>
                            <h3 className="text-3xl font-heading font-extrabold text-slate-900">Request Received!</h3>
                            <p className="text-slate-600">
                                Thank you! We'll review your details and contact you within 24 hours to provide your free quote.
                            </p>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-3xl font-heading font-extrabold text-slate-900 mb-2">Get Your Free Quote</h2>
                            <p className="text-slate-600 mb-8 font-sans">
                                Fill out the form below and we'll get back to you within 24 hours. No obligation.
                            </p>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5">First Name</label>
                                        <input
                                            {...register("firstName", { required: "First name is required" })}
                                            className={clsx(
                                                "w-full px-4 py-3 rounded-xl bg-slate-50 border focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50 transition-colors",
                                                errors.firstName ? 'border-red-400' : 'border-slate-200'
                                            )}
                                            placeholder="John"
                                        />
                                        {errors.firstName && <span className="text-red-500 text-xs mt-1 block">{errors.firstName.message}</span>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5">Last Name</label>
                                        <input
                                            {...register("lastName", { required: "Last name is required" })}
                                            className={clsx(
                                                "w-full px-4 py-3 rounded-xl bg-slate-50 border focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50 transition-colors",
                                                errors.lastName ? 'border-red-400' : 'border-slate-200'
                                            )}
                                            placeholder="Doe"
                                        />
                                        {errors.lastName && <span className="text-red-500 text-xs mt-1 block">{errors.lastName.message}</span>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5">Phone Number</label>
                                        <input
                                            type="tel"
                                            {...register("phone", { required: "Phone is required" })}
                                            className={clsx(
                                                "w-full px-4 py-3 rounded-xl bg-slate-50 border focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50 transition-colors",
                                                errors.phone ? 'border-red-400' : 'border-slate-200'
                                            )}
                                            placeholder="(555) 555-5555"
                                        />
                                        {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5">Email</label>
                                        <input
                                            type="email"
                                            {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
                                            className={clsx(
                                                "w-full px-4 py-3 rounded-xl bg-slate-50 border focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50 transition-colors",
                                                errors.email ? 'border-red-400' : 'border-slate-200'
                                            )}
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5">Service Location (City/Zip)</label>
                                        <input
                                            {...register("location", { required: "Location is required" })}
                                            className={clsx(
                                                "w-full px-4 py-3 rounded-xl bg-slate-50 border focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50 transition-colors",
                                                errors.location ? 'border-red-400' : 'border-slate-200'
                                            )}
                                            placeholder="Belleville, MI"
                                        />
                                        {errors.location && <span className="text-red-500 text-xs mt-1 block">{errors.location.message}</span>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5">Service Needed</label>
                                        <div className="relative">
                                            <select
                                                {...register("service", { required: "Please select a service" })}
                                                className={clsx(
                                                    "w-full px-4 py-3 rounded-xl bg-slate-50 border focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50 transition-colors appearance-none",
                                                    errors.service ? 'border-red-400' : 'border-slate-200'
                                                )}
                                                defaultValue=""
                                            >
                                                <option value="" disabled>Select an option...</option>
                                                <option value="residential">Residential Junk Removal</option>
                                                <option value="commercial">Commercial Cleanout</option>
                                                <option value="estate">Whole Property/Estate</option>
                                                <option value="ewaste">E-Waste/Recycling</option>
                                                <option value="emergency">Emergency Cleanout</option>
                                                <option value="other">Other</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                            </div>
                                        </div>
                                        {errors.service && <span className="text-red-500 text-xs mt-1 block">{errors.service.message}</span>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1.5">Project Details (Optional)</label>
                                    <textarea
                                        {...register("message")}
                                        rows={3}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50 transition-colors resize-none"
                                        placeholder="Tell us what needs to be removed..."
                                    />
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#0F3D24] text-white py-4 rounded-xl font-bold tracking-wide hover:bg-[#165c36] transition-colors relative overflow-hidden group flex justify-center items-center"
                                    >
                                        {isSubmitting ? (
                                            <Loader2 className="animate-spin" size={24} />
                                        ) : (
                                            <>
                                                <span className="relative z-10 flex items-center">SUBMIT REQUEST <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></span>
                                                <div className="absolute inset-0 bg-[#22C55E] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
                                            </>
                                        )}
                                    </button>
                                    <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center">
                                        <svg className="w-4 h-4 mr-1 text-slate-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                                        Your information is secure and will never be shared.
                                    </p>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PopupForm;
