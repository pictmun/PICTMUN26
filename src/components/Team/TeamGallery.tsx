"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FocusCards, SecretariatCards } from "../ui/focus-cards";

interface Year {
  id: string;
  name: number;
}

interface Entry {
  id: string;
  name: string;
  position: string;
  driveFileID: string;
  linkedIn: string;
  Instagram: string;
}

interface YearEntries {
  Secretariat: Entry[];
  USG: Entry[];
  Other: Entry[];
}

interface categoryTitle {
    Secretariat: string;
    USG: string;
    Other: string;
}

// STATIC DATA
const staticYears: Year[] = [
  { id: "1", name: 2025 },
  { id: "2", name: 2024 },
  
];

const staticEntries: Record<string, YearEntries> = {
  "1": {
    Secretariat: [
      { id: "e1", name: "Aahana Padole", position: "Secretary General", driveFileID: "1btK8SoYIVTdkMh2Z087BPzMluOjxROh-", linkedIn: "", Instagram: "" },
      { id: "e2", name: "Aryan Jaisingh", position: "Director General", driveFileID: "1kgJVDsdiKrJ_6CQlbvMVMG8qDukFPp-7", linkedIn: "", Instagram: "" },
      { id: "e3", name: "Aarush Pakhale", position: "Deputy Secretary General", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e4", name: "Omair Potrick", position: "Executive Director", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e5", name: "Ayush Chhetry ", position: "Chief Of Staff", driveFileID: "", linkedIn: "https://www.linkedin.com/in/tanishchaudhari/", Instagram: "https://www.instagram.com/tanishc228/" },
    ],
    USG: [
      { id: "e6", name: "Harsh Dalvi", position: "USG Technical", driveFileID: "1GMebGzmh4f5QoE2CPjRifCU-X70GJVPL", linkedIn: "http://www.linkedin.com/in/harsh-dalvi-975b292a9", Instagram: "https://www.instagram.com/harsh.d_01?igsh=c3gyeXE4bDIzbWlx" },
      { id: "e7", name: "Hardik Gujrathi", position: "USG Technical", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e8", name: "Unnati Jain", position: "USG Outreach", driveFileID: "1vucRrhJw-wslvTZ7RydF37IbpmPqVskz", linkedIn: "", Instagram: "" },
      { id: "e9", name: "Diya Shah", position: "USG Outreach", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e10", name: "Anjali Salway", position: "USG Design", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e11", name: "Gauravi Mutha", position: "USG Design", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e12", name: "Aayush Meghal", position: "USG Delegate Affairs", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e13", name: "Dhawal Talele", position: "USG Delegate Affairs", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e14", name: "Rugved Padalkar", position: "USG Operations", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e15", name: "Aditya Naik", position: "USG Operations", driveFileID: "13NcEiclZORg61zvtf3Qt3BwXo1Zoykf6", linkedIn: "", Instagram: "" },
      { id: "e16", name: "Mrugaja Joshi", position: "USG Content and Research", driveFileID: "1CFMVMckvYLFodRy2v6ixrfrPEnAfDch2", linkedIn: "", Instagram: "" },
      { id: "e17", name: "Chinmay Joshi", position: "USG Content and Research", driveFileID: "1pKE1hLEjnOWhI4OwxXJ8ca_O_-DJbxic", linkedIn: "", Instagram: "" },
      { id: "e18", name: "Ameya Dusane", position: "USG Content and Research", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e19", name: "Kaustubh Banerjee", position: "USG Marketing", driveFileID: "1UNzDabTKu9camyLAjZXFkmPH9z9p8TV3", linkedIn: "", Instagram: "" },
    ],
    Other: [
      
    ],
  },
  "2": {
    Secretariat: [
      { id: "e1", name: "Sakshi Mahajan", position: "Secretary General", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e2", name: "Tanish Chaudhari", position: "Director General", driveFileID: "", linkedIn: "https://www.linkedin.com/in/tanishchaudhari/", Instagram: "https://www.instagram.com/tanishc228/" },
      { id: "e3", name: "Ansh Vora", position: "Charge D'affairs", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e4", name: "Manasi Waghe", position: "Executive Director", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e5", name: "Mohammad Abbasi", position: "Chief Of Staff", driveFileID: "1HH7THNtAPLNb-deICreL5THfptCiDKi8", linkedIn: "https://www.linkedin.com/in/mohammed-abbasi-a8ab80271", Instagram: "" },
    ],
    USG: [
      { id: "e6", name: "Apurwa Kanitkar", position: "USG Content and Research", driveFileID: "", linkedIn: "https://www.linkedin.com/in/apurwa-kanitkar", Instagram: "https://www.instagram.com/apurwa.k_04?igsh=YXR1MmM4NHZzc2k1" },
      { id: "e7", name: "Anvita", position: "USG Content and Research", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e8", name: "Piyush Kinekar", position: "USG Marketing", driveFileID: "1rueNUEWaZBngYuO0FQRWC1fmnaOg19Pa", linkedIn: "https://www.linkedin.com/in/piyush-kinekar-883163272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", Instagram: "https://www.instagram.com/piyush_kinekar?igsh=N2N2azMybGJlbWl3&utm_source=qr" },
      { id: "e9", name: "Utsaah", position: "USG Marketing", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e10", name: "Vedant Shinde", position: "USG Design", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e11", name: "Sanjeev Hotha", position: "USG Design", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e12", name: "Nirbhay Shah", position: "USG Delegate Affairs", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e13", name: "Shloka Shetty", position: "USG Delegate Affairs", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e14", name: "Dhruv Arun", position: "USG Operations", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e15", name: "Harjas", position: "USG Operations", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e16", name: "Shravani Chougule", position: "USG Outreach", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e17", name: "Ayush Wattamwar", position: "USG Outreach", driveFileID: "", linkedIn: "", Instagram: "" },
      
    ],
    Other: [],
  },
 
};

const categoryTitle: categoryTitle = {
    "Secretariat": "The Secretariat", "USG": "Under Secretary General", "Other": "Volunteers",
}


export default function TeamGallery() {
  const [years, setYears] = useState<Year[]>([]);
  const [selectedYear, setSelectedYear] = useState<Year | null>(null);
  const [yearEntries, setYearEntries] = useState<YearEntries | null>(null);

  useEffect(() => {
    const sortedYears = [...staticYears].sort((a, b) => b.name - a.name);
    setYears(sortedYears);
    if (sortedYears.length > 0) {
      setSelectedYear(sortedYears[0]);
      setYearEntries(staticEntries[sortedYears[0].id] || { Secretariat: [], USG: [], Other: [] });
    }
  }, []);

  const handleYearChange = (year: Year) => {
    setSelectedYear(year);
    setYearEntries(staticEntries[year.id] || { Secretariat: [], USG: [], Other: [] });
  };

  return (
    <div className="mx-auto px-4 py-2">
      {/* Year Selector */}
      <div className="w-full relative">
        <Swiper
          style={{ padding: '36px' }}
          slidesPerView={2}
          spaceBetween={20}
          centeredSlides={true}
          modules={[Navigation, Pagination]}
          className="w-full max-w-md md:max-w-lg py-4 relative"
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet custom-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
          }}
        >
          {years.map((year) => (
            <SwiperSlide key={year.id}>
              <button
                onClick={() => handleYearChange(year)}
                className={`w-full px-4 py-2 rounded-lg font-semibold text-xl transition
                  ${selectedYear?.id === year.id
                    ? 'bg-dull_gold text-blue-dull'
                    : 'bg-blue-dull text-dull_gold'
                  }`}
              >
                Year {year.name}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev invisible md:visible" style={{ color: '#e6ba63' }}></div>
        <div className="swiper-button-next invisible md:visible" style={{ color: '#e6ba63' }}></div>
        <div className="swiper-pagination mt-6" />
      </div>

      {/* Entry Categories */}
      {selectedYear && yearEntries && (
        <div className="mt-8 space-y-8">
          {["Secretariat", "USG", "Other"].map((category) => {
            const entries = yearEntries[category as keyof YearEntries];
            return (
              <div key={category}>
                {entries.length > 0 && category !== "Secretariat" ? (
                <>
                  { entries.length > 0 && <h2 className="text-4xl font-bold mb-6 py-8 text-center text-gold">{categoryTitle[category as keyof YearEntries]}</h2>}
                  <FocusCards cards={entries} />
                </>
                ) : (
                <>
                  { entries.length > 0 && <h2 className="text-4xl font-bold mb-6 py-8 text-center text-gold">{categoryTitle[category as keyof YearEntries]}</h2>}
                  <SecretariatCards cards={entries} />
                </> 
                )
               }
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
