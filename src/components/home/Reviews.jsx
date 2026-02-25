import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import SectionLabel from '../shared/SectionLabel';

const reviewsData = [
    {
        id: 1,
        name: "Michael R.",
        date: "2 weeks ago",
        platform: "Google",
        text: "Apex made clearing out my father's estate completely stress-free. They arrived on time, handled everything with respect, and left the house broom-clean just like they promised. Worth every penny."
    },
    {
        id: 2,
        name: "Sarah T.",
        date: "1 month ago",
        platform: "Google",
        text: "We had a tight deadline moving out of our retail space in Canton. The Apex team was incredibly fast and professional. They even sorted the e-waste for recycling. Highly recommended for commercial jobs!"
    },
    {
        id: 3,
        name: "David L.",
        date: "2 months ago",
        platform: "Facebook",
        text: "I appreciated their transparent pricing. No hidden fees at the end, just an honest quote upfront. The crew was polite and worked non-stop until the garage was totally cleared out."
    },
    {
        id: 4,
        name: "Emily W.",
        date: "3 months ago",
        platform: "Google",
        text: "Super fast response time! I called them for a post-construction cleanup and they were there the next morning. Very professional service and they took care of all the heavy lifting."
    }
];

const Reviews = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        loop: true,
        skipSnaps: false,
        dragFree: true
    });

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="py-24 bg-[#F8F9FA] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16">
                    <div className="max-w-2xl">
                        <SectionLabel text="WHAT OUR CUSTOMERS SAY" />
                        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#1E293B] mt-2 mb-4">
                            Real Reviews From <br className="hidden md:block" />Real Homeowners
                        </h2>
                        <p className="text-slate-600 font-sans text-lg">
                            Don't just take our word for it — here's what Belleville residents are saying about our stress-free cleanouts.
                        </p>
                    </div>

                    <div className="flex space-x-3 mt-6 md:mt-0">
                        <button
                            onClick={scrollPrev}
                            className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:text-[#0F3D24] hover:bg-[#22C55E]/10 hover:border-[#22C55E] transition-all"
                            aria-label="Previous reviews"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:text-[#0F3D24] hover:bg-[#22C55E]/10 hover:border-[#22C55E] transition-all"
                            aria-label="Next reviews"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Carousel Viewport */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex -ml-4 md:-ml-6 pb-8 pt-4">
                        {reviewsData.map((review) => (
                            <div key={review.id} className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_33.33%] pl-4 md:pl-6">
                                <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all h-full border border-slate-100 btn-magnetic">
                                    <div className="flex items-center text-[#FBBC05] mb-6">
                                        <Star size={18} className="fill-current" />
                                        <Star size={18} className="fill-current" />
                                        <Star size={18} className="fill-current" />
                                        <Star size={18} className="fill-current" />
                                        <Star size={18} className="fill-current" />
                                    </div>

                                    <p className="text-slate-700 italic leading-relaxed mb-8">
                                        "{review.text}"
                                    </p>

                                    <div className="flex items-center justify-between mt-auto">
                                        <div>
                                            <h4 className="font-bold text-[#1E293B]">{review.name}</h4>
                                            <div className="text-xs text-slate-500 mt-1">{review.date}</div>
                                        </div>
                                        <div className="flex items-center">
                                            {review.platform === 'Google' ? (
                                                <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center font-bold text-[#EA4335] text-[10px]">
                                                    G
                                                </div>
                                            ) : (
                                                <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center font-bold text-[#1877F2] text-[10px]">
                                                    f
                                                </div>
                                            )}
                                            <span className="text-xs text-slate-500 ml-2 font-medium">{review.platform} Review</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Aggregate Stats */}
                <div className="mt-8 flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm font-bold text-[#1E293B] border-t border-slate-200 pt-8">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-[#EA4335] text-xs mr-3">G</div>
                        150+ Reviews • 5.0 ★
                    </div>
                    <div className="hidden md:block w-px h-6 bg-slate-300"></div>
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-[#1877F2] text-xs mr-3">f</div>
                        50+ Reviews • 5.0 ★
                    </div>
                    <div className="hidden md:block w-px h-6 bg-slate-300"></div>
                    <div className="flex items-center">
                        <ShieldCheck size={24} className="text-[#22C55E] mr-2" />
                        Fully Licensed & Insured
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Reviews;
