import React from "react";

export default function People() {
  const peoples = [
    {
      name: 'Sreenivasulu Mummadi',
      review: 'Reduced my diabetes and blood pressure medication costs by 50% by switching to substitutes. The purchasing process is easy and transparent.',
      age: 72,
      background: 'https://cdn.platinumrx.in/meds-prescription/c1fe6edb-5afb-4ac6-a58b-e818508a73fb.jpeg'
    },
    {
      name: 'Sanjay Patel', 
      review: "PlatinumRx saves me ₹1800/month on BP meds with genuine products and timely delivery. As a heart patient, I'm a loyal customer for life!",
      age: 51,
      background: 'https://cdn.platinumrx.in/meds-prescription/ac0797f9-68f9-4c5b-b21d-375e87a2a56a.jpeg'
    },
    {
      name: 'Ajay Gupta',
      review: "PlatinumRx has significantly reduced my monthly medical expenses by 60%. Switching to substitute medicines was a great decision, and it's now my family's first preference.",
      age: 56,
      background: 'https://cdn.platinumrx.in/meds-prescription/c1fe6edb-5afb-4ac6-a58b-e818508a73fb.jpeg'
    },
    {
      name: 'Amit kumar',
      review: "PlatinumRx helped me find substitute medicines for my Father's chronic condition and saved us 2,500 each month. Kudos to the team!",
      age: 29,
      background: 'https://cdn.platinumrx.in/meds-prescription/ac0797f9-68f9-4c5b-b21d-375e87a2a56a.jpeg'
    }
  ];

  return (
    <section className="from-white via-[#ead4ee] to-white py-12 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex  gap-2 mb-8">
          <h2 className="text-[24px] font-bold">
            Hear from Our Happy Customers
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {peoples.map((review) => (
            <div
              key={review.name}
              className="relative h-80 rounded-xl overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.00) 65.53%), url(${review.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <span className="text-4xl text-white mb-4 block">❝</span>
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">😊</span>
                  <p className="text-white text-sm">{review.name}</p>
                  <span className="mx-3 h-[18px] w-[2px] bg-white rounded"></span>
                  <p className="text-white text-sm">{review.age}</p>
                </div>
                <p className="text-white text-sm leading-[22px] tracking-[0.25px]">
                  {review.review}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
