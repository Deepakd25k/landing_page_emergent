import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const AboutMe = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-ink-bg rounded-3xl p-6 sm:p-10 border border-line flex flex-col md:flex-row gap-10 items-center shadow-sm">
          
          {/* Video Placeholder (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-5/12 aspect-video bg-ink rounded-2xl relative overflow-hidden group cursor-pointer border border-line shadow-lg"
          >
            {/* Dummy Thumbnail Image */}
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-14 h-14 bg-blue text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 ml-1" fill="currentColor" />
              </div>
              <p className="text-white text-xs font-semibold mt-3 tracking-widest uppercase">Watch 1-Min Intro</p>
            </div>
            
            {/* 
              DEVELOPER NOTE: 
              To embed a real video (like Loom or YouTube), replace the entire <motion.div> contents 
              with your <iframe> code, for example:
              <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" className="w-full h-full" ...></iframe>
            */}
          </motion.div>

          {/* Bio Content (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-7/12"
          >
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue/10 text-blue mb-4 uppercase tracking-wider">
              Marketing &times; Development
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-3 leading-tight">
              Hi, I'm Deepak.
            </h2>
            <p className="text-ink-2 text-base sm:text-lg mb-4 leading-relaxed">
              I noticed a massive gap in the D2C space: Agencies only look at Ad Dashboards, while Founders only look at Bank Accounts. Nobody was connecting the dots.
            </p>
            <p className="text-ink-2 text-base sm:text-lg mb-6 leading-relaxed">
              By combining performance marketing with full-stack development, I build systems that expose the raw truth about your unit economics and optimize your entire funnel—from the first click to the final profit margin.
            </p>
            
            <div className="flex gap-6 border-t border-line pt-6">
              <div>
                <p className="text-2xl font-bold text-ink">₹10Cr+</p>
                <p className="text-xs text-ink-3 uppercase font-semibold">Ad Spend Managed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-ink">50+</p>
                <p className="text-xs text-ink-3 uppercase font-semibold">Brands Audited</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
