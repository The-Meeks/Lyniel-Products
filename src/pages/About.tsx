import { motion } from 'motion/react';
import { ShieldCheck, Award, Users, Factory } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const About = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6"
          >
            About Lyniel Products EA
          </motion.h1>
          <p className="text-xl text-neutral-dark/70 max-w-3xl mx-auto leading-relaxed">
            A legacy of manufacturing excellence in shoe care and household products, serving the East African market with reliability and quality.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-neutral-dark">Excellence in Industrial Production</h2>
            <p className="text-neutral-dark/70 leading-relaxed">
              Lyniel Products EA is a dedicated manufacturing firm based in Nairobi, Kenya. We specialize in the production of essential shoe care and household items, focusing on the physical craft of creating reliable products.
            </p>
            <p className="text-neutral-dark/70 leading-relaxed">
              From our godown in the Industrial Area, we produce the renowned <strong>Crow Shine</strong> range, including shoe cream and leather dye. Our focus is not on digital technology, but on the tangible quality of the products we manufacture for everyday use.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-mint/20 rounded-lg flex items-center justify-center">
                  <Award className="text-brand-teal w-6 h-6" />
                </div>
                <span className="font-semibold text-neutral-dark">Quality Control</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-mint/20 rounded-lg flex items-center justify-center">
                  <Factory className="text-brand-teal w-6 h-6" />
                </div>
                <span className="font-semibold text-neutral-dark">Local Production</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=1000"
              alt="Industrial Godown"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-teal/10 rounded-full -z-10"></div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="bg-neutral-light rounded-3xl p-12 md:p-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">Our Core Values</h2>
            <p className="text-neutral-dark/60">The principles that drive our manufacturing and business relationships.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Integrity",
                desc: "We believe in honest business practices and transparent manufacturing standards.",
                icon: ShieldCheck
              },
              {
                title: "Innovation",
                desc: "Continuously improving our formulas to provide better protection and shine for your leather.",
                icon: Factory
              },
              {
                title: "Customer Focus",
                desc: "Listening to our partners and end-users to deliver products that meet real-world needs.",
                icon: Users
              }
            ].map((value, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mx-auto mb-6">
                  <value.icon className="text-brand-teal w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-neutral-dark">{value.title}</h3>
                <p className="text-neutral-dark/70 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
