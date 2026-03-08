"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import {
  CheckCircle,
  ChevronRight,
  Info,
  Clock,
  Utensils,
  Leaf,
  Flame,
  Star,
  ShieldCheck,
  ArrowRight,
  Building2
} from 'lucide-react';

type Step = 'plan' | 'review' | 'checkout';
type Frequency = 'weekly' | 'monthly';

export default function PGMealsPage() {
  const [step, setStep] = useState<Step>('plan');
  const [frequency, setFrequency] = useState<Frequency>('weekly');
  const [selectedPlan, setSelectedPlan] = useState<'standard' | 'premium' | null>(null);

  const steps = [
    { id: 'plan', label: 'Select Plan' },
    { id: 'review', label: 'Review' },
    { id: 'checkout', label: 'Checkout' }
  ];

  const plans = [
    {
      id: 'standard',
      name: 'Standard Plan',
      price: frequency === 'weekly' ? 2500 : 9000,
      period: frequency === 'weekly' ? 'week' : 'month',
      features: [
        'Choice of Breakfast, Lunch or Dinner',
        'Daily changing menu',
        'Balanced home-style nutrition',
        'Timely delivery'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: frequency === 'weekly' ? 3500 : 12500,
      period: frequency === 'weekly' ? 'week' : 'month',
      features: [
        'Full Meal Set (Breakfast + Lunch + Dinner)',
        'Premium Gourmet Dishes',
        'Customized dietary preferences',
        'Priority support & delivery',
        'Complementary dessert twice a week'
      ],
      popular: true
    }
  ];

  const weeklyMeals = [
    { day: 'Mon', lunch: 'Paneer Butter Masala, Dal Tadka, Rice, 3 Roti', dinner: 'Mix Veg, Yellow Dal, Rice, 3 Roti', type: 'veg' },
    { day: 'Tue', lunch: 'Aloo Gobhi, Rajma, Rice, 3 Roti', dinner: 'Baingan Bharta, Dal Makhani, Rice, 3 Roti', type: 'veg' },
    { day: 'Wed', lunch: 'Kadai Paneer, Dal Fry, Rice, 3 Roti', dinner: 'Bhindi Masala, Chana Dal, Rice, 3 Roti', type: 'veg' },
    { day: 'Thu', lunch: 'Matar Paneer, Dal Tadka, Rice, 3 Roti', dinner: 'Lauki Kofta, Moong Dal, Rice, 3 Roti', type: 'veg' },
    { day: 'Fri', lunch: 'Shahi Paneer, Dal Makhani, Rice, 3 Roti', dinner: 'Arbi Masala, Mix Dal, Rice, 3 Roti', type: 'veg' },
    { day: 'Sat', lunch: 'Chole Bhature, Pulao, Raita', dinner: 'Pav Bhaji, Salad, Sweet', type: 'veg' },
    { day: 'Sun', lunch: 'Special Veg Biryani, Raita, Gulab Jamun', dinner: 'Poori Bhaji, Kheer', type: 'veg' },
  ];

  return (
    <div className="bg-cream/20 min-h-screen pb-20">
      {/* Header Info */}
      <div className="bg-navy text-white pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Gharana PG Subscriptions</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Hassle-free, healthy, and delicious home-cooked meals delivered daily to your PG or hostel.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-8">
        {/* Stepper */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-center justify-between max-w-3xl mx-auto relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
            {steps.map((s, idx) => {
              const isActive = s.id === step;
              const isPast = steps.findIndex(x => x.id === step) > idx;
              return (
                <div key={s.id} className="relative z-10 flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                    isActive ? 'bg-gold border-gold text-white' :
                    isPast ? 'bg-navy border-navy text-white' : 'bg-white border-gray-200 text-gray-400'
                  }`}>
                    {isPast ? <CheckCircle size={20} /> : idx + 1}
                  </div>
                  <span className={`text-xs font-bold mt-2 uppercase tracking-tighter ${isActive ? 'text-navy' : 'text-gray-400'}`}>
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {step === 'plan' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif text-navy mb-6">Choose Your Plan</h2>

              {/* Toggle */}
              <div className="inline-flex items-center p-1 bg-gray-100 rounded-lg">
                <button
                  onClick={() => setFrequency('weekly')}
                  className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${frequency === 'weekly' ? 'bg-white text-navy shadow-sm' : 'text-gray-500 hover:text-navy'}`}
                >
                  Weekly
                </button>
                <button
                  onClick={() => setFrequency('monthly')}
                  className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${frequency === 'monthly' ? 'bg-white text-navy shadow-sm' : 'text-gray-500 hover:text-navy'}`}
                >
                  Monthly
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative bg-white rounded-2xl border-2 p-8 transition-all hover:shadow-xl cursor-pointer ${
                    selectedPlan === plan.id ? 'border-gold ring-1 ring-gold/20' : 'border-gray-100 hover:border-gold/30'
                  }`}
                  onClick={() => setSelectedPlan(plan.id as any)}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      Recommended
                    </div>
                  )}

                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-serif text-navy mb-1">{plan.name}</h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-navy">₹{plan.price}</span>
                        <span className="text-gray-400">/{plan.period}</span>
                      </div>
                    </div>
                    <div className={`p-3 rounded-xl ${plan.popular ? 'bg-gold/10 text-gold' : 'bg-navy/5 text-navy'}`}>
                      {plan.id === 'standard' ? <Utensils size={24} /> : <Star size={24} />}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                        <CheckCircle size={18} className="text-gold flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPlan(plan.id as any);
                      setStep('review');
                    }}
                    className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                      selectedPlan === plan.id
                        ? 'bg-gold text-white'
                        : 'bg-navy text-white hover:bg-navy/90'
                    }`}
                  >
                    Select this Plan <ChevronRight size={18} />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-100 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Healthy Food"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center gap-2 text-gold font-bold mb-4">
                  <ShieldCheck size={20} />
                  <span className="text-sm uppercase tracking-widest">Our Quality Promise</span>
                </div>
                <h3 className="text-2xl font-serif text-navy mb-4">Pure, Hygienic & Nutritious</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We understand that living away from home is tough. That's why we prepare every meal with the same love and hygiene as your mother would. No preservatives, no artificial colors, just pure goodness.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                    FSSAI Certified Kitchen
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                    Zero Reuse of Oil
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                    Daily Quality Checks
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                    Eco-friendly Packaging
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 'review' && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                    <h2 className="text-2xl font-serif text-navy">Order Review</h2>
                    <button
                      onClick={() => setStep('plan')}
                      className="text-gold text-sm font-bold hover:underline"
                    >
                      Change Plan
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-8 bg-accent/30 p-4 rounded-xl">
                      <div className="bg-white p-2 rounded-lg text-gold shadow-sm">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-tighter">Delivery Schedule</p>
                        <p className="text-sm font-medium text-navy">Lunch: 12:30 PM - 1:30 PM | Dinner: 7:30 PM - 8:30 PM</p>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
                      <Utensils size={18} className="text-gold" />
                      Weekly Menu Schedule
                    </h3>

                    <div className="space-y-4">
                      {weeklyMeals.map((item) => (
                        <div key={item.day} className="flex gap-4 p-4 border border-gray-50 rounded-xl hover:bg-cream/10 transition-colors">
                          <div className="flex-shrink-0 w-12 h-12 bg-navy text-white rounded-lg flex items-center justify-center font-bold">
                            {item.day}
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-bold text-gray-400 uppercase">Lunch</span>
                              <div className="w-3 h-3 border border-green-600 flex items-center justify-center p-0.5">
                                <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                              </div>
                            </div>
                            <p className="text-sm text-gray-700 mb-2">{item.lunch}</p>

                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-bold text-gray-400 uppercase">Dinner</span>
                              <div className="w-3 h-3 border border-green-600 flex items-center justify-center p-0.5">
                                <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                              </div>
                            </div>
                            <p className="text-sm text-gray-700">{item.dinner}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-navy mb-6">Bill Details</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>{selectedPlan === 'standard' ? 'Standard Plan' : 'Premium Plan'} ({frequency})</span>
                      <span>₹{plans.find(p => p.id === selectedPlan)?.price}.00</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery Fee</span>
                      <span className="text-green-600 font-medium">FREE</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Taxes & Charges</span>
                      <span>₹125.00</span>
                    </div>
                  </div>

                  <div className="border-t border-dashed border-gray-200 pt-4 mb-8">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-lg font-bold text-navy">Total Pay</span>
                      <span className="text-2xl font-bold text-navy">₹{(plans.find(p => p.id === selectedPlan)?.price || 0) + 125}.00</span>
                    </div>
                    <p className="text-xs text-green-600 font-medium text-right italic">You saved ₹450 on this plan!</p>
                  </div>

                  <div className="bg-gold/10 p-4 rounded-xl mb-8 flex gap-3">
                    <Info size={20} className="text-gold flex-shrink-0" />
                    <p className="text-xs text-gold/80 leading-relaxed">
                      Cancellations made 24 hours before the first delivery will receive a full refund.
                    </p>
                  </div>

                  <button
                    onClick={() => setStep('checkout')}
                    className="w-full bg-navy text-white py-4 rounded-xl font-bold hover:bg-navy/90 transition-all flex items-center justify-center gap-2"
                  >
                    Proceed to Payment <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 'checkout' && (
          <div className="animate-in fade-in zoom-in-95 duration-500 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} />
              </div>
              <h2 className="text-3xl font-serif text-navy mb-2">Ready to Start!</h2>
              <p className="text-gray-500 mb-10">
                You've selected the <span className="font-bold text-navy">{selectedPlan === 'standard' ? 'Standard' : 'Premium'} {frequency}</span> plan.
                Complete your payment to activate your subscription.
              </p>

              <div className="space-y-4 mb-10 text-left">
                <div className="p-4 border border-gray-100 rounded-xl hover:border-gold transition-colors cursor-pointer flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-[8px] font-bold text-gray-400">VISA</div>
                    <div>
                      <p className="text-sm font-bold text-navy">Credit / Debit Card</p>
                      <p className="text-xs text-gray-400">All major cards accepted</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-gray-300" />
                </div>
                <div className="p-4 border border-gray-100 rounded-xl hover:border-gold transition-colors cursor-pointer flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-[10px] font-bold text-gray-400">UPI</div>
                    <div>
                      <p className="text-sm font-bold text-navy">UPI Payment</p>
                      <p className="text-xs text-gray-400">Pay using Google Pay, PhonePe, Paytm</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-gray-300" />
                </div>
                <div className="p-4 border border-gray-100 rounded-xl hover:border-gold transition-colors cursor-pointer flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <Building2 size={20} className="text-gray-300" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-navy">Net Banking</p>
                      <p className="text-xs text-gray-400">All Indian banks available</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-gray-300" />
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-gray-400 text-xs mb-8">
                <ShieldCheck size={14} />
                Secure 256-bit SSL Encrypted Payment
              </div>

              <button
                onClick={() => setStep('plan')}
                className="text-gray-400 text-sm font-medium hover:text-navy transition-colors"
              >
                Go Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
