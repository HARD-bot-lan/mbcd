import React, { useEffect, useRef, useState } from 'react'
import { EventEdition } from '../types/event'

interface PartnersProps {
  edition: EventEdition
}

const Partners: React.FC<PartnersProps> = ({ edition }) => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        setIsOverflowing(containerRef.current.scrollWidth > containerRef.current.clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [edition.partners]);

  return (
    <section id="partners" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're grateful to our amazing partners who make {edition.title} {edition.year} possible
          </p>
        </div>

        {edition.partners.length > 0 ? (
          <div className="relative overflow-hidden px-4">
            <div 
              ref={containerRef}
              className={`flex items-center gap-16 ${
                isOverflowing ? 'animate-scroll justify-start' : 'justify-center'
              }`}
              style={isOverflowing ? { width: 'max-content' } : undefined}
            >
              {/* Original partners */}
              {edition.partners.map((partner) => (
                <a
                  key={`${partner.id}-1`}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-20 w-auto object-contain"
                    title={partner.name}
                  />
                </a>
              ))}

              {/* Duplicate partners for continuous scroll */}
              {isOverflowing && edition.partners.map((partner) => (
                <a
                  key={`${partner.id}-2`}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-20 w-auto object-contain"
                    title={partner.name}
                  />
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in Partnering?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our community of forward-thinking organizations and help shape the future of technology. 
              We offer various partnership packages to suit your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:blockchaincryptodays@gmail.com"
                className="btn-primary"
              >
                Partnership Opportunities
              </a>
              <a 
                href={edition.sponsorshipPdfUrl}
                download="Morocco-Blockchain-Cryptocurrency-Days-Sponsorship-Kit.pdf"
                className="btn-secondary"
              >
                Download Sponsorship Kit
              </a>
            </div>
          </div>
        )}

        {/* Partnership CTA */}
        {edition.partners.length > 0 && (
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in Partnering?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our community of forward-thinking organizations and help shape the future of technology. 
              We offer various partnership packages to suit your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:blockchaincryptodays@gmail.com"
                className="btn-primary"
              >
                Partnership Opportunities
              </a>
              <a 
                href="/sponsorship-kit.pdf"
                download="Morocco-Blockchain-Cryptocurrency-Days-Sponsorship-Kit.pdf"
                className="btn-secondary"
              >
                Download Sponsorship Kit
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Partners