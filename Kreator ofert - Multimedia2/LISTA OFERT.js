const packages = [

// Internet światłowodowy - Gorąca trzydziestka 2025 11/25
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Black Week - 300/25 Mb/s + HBO Max',
    cena: 47.31,
    cenaAktywacji: 34.98,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 9.99, promocja: { cena: 0.00, czasTrwania: 1 } },
    ],
    promocja: { cena: 29.99, czasTrwania: 1 }
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Black Week - 650/50 Mb/s + HBO Max',
    cena: 67.31,
    cenaAktywacji: 34.98,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 9.99, promocja: { cena: 0.00, czasTrwania: 1 } },
    ],
    promocja: { cena: 29.99, czasTrwania: 1 }
  },

// Internet światłowodowy - Studencki Raj 08/25 N
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Studencki Raj - 300/25 Mb/s',
    cena: 41.12,
    cenaAktywacji: 9.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 4.99, promocja: { cena: 1.60, czasTrwania: 3 } },
    ],
    promocja: { cena: 11.60, czasTrwania: 3 }
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Studencki Raj - 650/50 Mb/s',
    cena: 51.12,
    cenaAktywacji: 9.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 4.99, promocja: { cena: 1.60, czasTrwania: 3 } },
    ],
    promocja: { cena: 21.60, czasTrwania: 3 }
  },

// Internet światłowodowy - Strzał w 10–10 MC2 08/25 i Strzał w 10–20 MC2 08/25
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Strzał w 10 - 300/25 Mb/s',
    cena: 46.99,
    cenaAktywacji: 29.99,
    dlugoscUmowy: 10,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
    promocja: { cena: 0.18, czasTrwania: 1 }
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Strzał w 10 - 650/50 Mb/s',
    cena: 62.99,
    cenaAktywacji: 29.99,
    dlugoscUmowy: 10,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
    promocja: { cena: 0.18, czasTrwania: 1 }
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Strzał w 10 - 300/25 Mb/s',
    cena: 46.99,
    cenaAktywacji: 29.99,
    dlugoscUmowy: 20,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
    promocja: { cena: 0.18, czasTrwania: 1 }
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Strzał w 10 - 650/50 Mb/s',
    cena: 62.99,
    cenaAktywacji: 29.99,
    dlugoscUmowy: 20,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
    promocja: { cena: 0.18, czasTrwania: 1 }
  },


// Internet światłowodowy - Mega Net MC2 08/25
  {
    typ: 'Internet światłowodowy',
    nazwa: 'FEST NET SENIOR - 60/6 Mb/s',
    cena: 61.99,
    cenaAktywacji: 99.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00, },
    ],
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'FEST NET - 150/10 Mb/s',
    cena: 66.99,
    cenaAktywacji: 99.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00, },
    ],
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'FEST NET - 300/25 Mb/s',
    cena: 77.99,
    cenaAktywacji: 99.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00, },
    ],
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'FEST NET - 650/50 Mb/s',
    cena: 98.99,
    cenaAktywacji: 99.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00, },
    ],
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'FEST NET - 900/60 Mb/s',
    cena: 119.99,
    cenaAktywacji: 99.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00, },
    ],
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'FEST NET SENIOR - 60/6 Mb/s',
    cena: 51.99,
    cenaAktywacji: 69.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00, },
    ],
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'FEST NET - 150/10 Mb/s',
    cena: 56.99,
    cenaAktywacji: 69.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00, },
    ],
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'FEST NET - 300/25 Mb/s',
    cena: 67.99,
    cenaAktywacji: 69.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00, },
    ],
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'FEST NET - 650/50 Mb/s',
    cena: 88.99,
    cenaAktywacji: 69.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00, },
    ],
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'FEST NET - 900/60 Mb/s',
    cena: 109.99,
    cenaAktywacji: 69.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00, },
    ],
  },

// Internet światłowodowy - Kontynuacja Net + HBO 2025 11/25
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Kontynuacja Net + HBO - 300/25 Mb/s + HBO Max',
    cena: 57.31,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 9.99, promocja: { cena: 0.00, czasTrwania: 1 } },
    ],
    promocja: { cena: 29.99, czasTrwania: 1 }
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Kontynuacja Net + HBO - 650/50 Mb/s + HBO Max',
    cena: 77.31,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 9.99, promocja: { cena: 0.00, czasTrwania: 1 } },
    ],
    promocja: { cena: 29.99, czasTrwania: 1 }
  },

// Internet światłowodowy - Trzymaj z Nami NET MC2 08/25
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Trzymaj z nami - 60/6 Mb/s',
    cena: 46.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ]
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Trzymaj z nami - 150/10 Mb/s',
    cena: 61.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ]
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Trzymaj z nami - 300/25 Mb/s',
    cena: 72.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ]
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Trzymaj z nami - 650/50 Mb/s',
    cena: 92.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ]
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Trzymaj z nami - 900/60 Mb/s',
    cena: 113.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ]
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Trzymaj z nami - 60/6 Mb/s',
    cena: 46.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ]
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Trzymaj z nami - 150/10 Mb/s',
    cena: 51.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ]
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Trzymaj z nami - 300/25 Mb/s',
    cena: 62.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ]
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Trzymaj z nami - 650/50 Mb/s',
    cena: 82.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ]
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Trzymaj z nami - 900/60 Mb/s',
    cena: 103.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ]
  },

// Internet mobilny - FEST Mobil MC2 08-25
  {
    typ: 'Internet mobilny',
    nazwa: 'FEST Mobilny 5 GB',
    cena: 19.90,
    cenaAktywacji: 19.90,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem LTE', cena: 10.42 },
    ],
  },
  {
    typ: 'Internet mobilny',
    nazwa: 'FEST Mobilny 10 GB',
    cena: 29.90,
    cenaAktywacji: 19.90,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem LTE', cena: 10.42 },
    ],
  },
  {
    typ: 'Internet mobilny',
    nazwa: 'FEST Mobilny 30 GB',
    cena: 39.90,
    cenaAktywacji: 19.90,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem LTE', cena: 10.42 },
    ],
  },
  {
    typ: 'Internet mobilny',
    nazwa: 'FEST Mobilny 100 GB',
    cena: 19.90,
    cenaAktywacji: 71.90,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem LTE', cena: 10.42 },
    ],
  },
  {
    typ: 'Internet mobilny',
    nazwa: 'FEST Mobilny 100 GB + Pakiet NOC 100 GB',
    cena: 89.90,
    cenaAktywacji: 19.90,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem LTE', cena: 10.42 },
    ],
  },
  {
    typ: 'Internet mobilny',
    nazwa: 'FEST Mobilny 200 GB',
    cena: 99.90,
    cenaAktywacji: 19.90,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem LTE', cena: 10.42 },
    ],
  },
  {
    typ: 'Internet mobilny',
    nazwa: 'FEST Mobilny 200 GB + Pakiet NOC 200 GB',
    cena: 119.90,
    cenaAktywacji: 19.90,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem LTE', cena: 10.42 },
    ],
  },
  {
    typ: 'Internet mobilny',
    nazwa: 'FEST Mobilny 500 GB',
    cena: 149.90,
    cenaAktywacji: 19.90,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem LTE', cena: 10.42 },
    ],
  },

// Telewizja - Mega TV + SMART TV MC2 09/25
  {
    typ: 'Telewizja',
    nazwa: 'StartBox - 68 kanałów TV',
    cena: 76.99,
    cenaAktywacji: 99.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'MiniBox - 104 kanały TV',
    cena: 83.99,
    cenaAktywacji: 99.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'SuperBox - 144 kanały TV',
    cena: 94.99,
    cenaAktywacji: 99.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'MaxBox - 163 kanały TV',
    cena: 114.99,
    cenaAktywacji: 99.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'StartBox - 68 kanałów TV',
    cena: 66.99,
    cenaAktywacji: 69.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'MiniBox - 104 kanały TV',
    cena: 73.99,
    cenaAktywacji: 69.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'SuperBox - 144 kanały TV',
    cena: 84.99,
    cenaAktywacji: 69.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'MaxBox - 163 kanały TV',
    cena: 104.99,
    cenaAktywacji: 69.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },

// Telewizja - Trzymaj z Nami TV + SMART TV MC2 09/25
  {
    typ: 'Telewizja',
    nazwa: 'Trzymaj z nami - StartBox - 68 kanałów TV',
    cena: 76.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Trzymaj z nami - MiniBox - 104 kanały TV',
    cena: 81.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Trzymaj z nami - SuperBox - 144 kanały TV',
    cena: 89.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Trzymaj z nami - MaxBox - 163 kanały TV',
    cena: 109.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Trzymaj z nami - StartBox - 68 kanałów TV',
    cena: 66.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Trzymaj z nami - MiniBox - 104 kanały TV',
    cena: 71.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Trzymaj z nami - SuperBox - 144 kanały TV',
    cena: 79.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Trzymaj z nami - MaxBox - 163 kanały TV',
    cena: 99.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },

// Telewizja - KIBIC+ MC2 08/25
  {
    typ: 'Telewizja',
    nazwa: 'KIBIC+',
    cena: 143.98,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
    promocja: { cena: 132.99, czasTrwania: 3 }
  },

// Telewizja - KINO+ MC2 08/25
  {
    typ: 'Telewizja',
    nazwa: 'KINO+',
    cena: 111.97,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },

// Telewizja - Dla Dwojga Canal+, HBO Max i TV + SMART TV MC2 09/25
  {
    typ: 'Telewizja',
    nazwa: 'Dla Dwojga - StartBox + Canal+ Seriale i Filmy + HBO + HBO Max',
    cena: 110.97,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Dla Dwojga - MiniBox + Canal+ Seriale i Filmy + HBO + HBO Max',
    cena: 115.97,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Dla Dwojga - SuperBox + Canal+ Seriale i Filmy + HBO + HBO Max',
    cena: 120.97,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Dla Dwojga - MaxBox + Canal+ Seriale i Filmy + HBO + HBO Max',
    cena: 125.97,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Dla Dwojga - StartBox + Canal+ Super Sport + HBO + HBO Max',
    cena: 150.97,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Dla Dwojga - MiniBox + Canal+ Super Sport + HBO + HBO Max',
    cena: 155.97,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Dla Dwojga - SuperBox + Canal+ Super Sport + HBO + HBO Max',
    cena: 160.97,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Dla Dwojga - MaxBox + Canal+ Super Sport + HBO + HBO Max',
    cena: 165.97,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },

  {
    typ: 'Telewizja',
    nazwa: 'SMART TV',
    cena: 4.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 5.00 },
    ],
  },

  {
    typ: 'Telewizja',
    nazwa: 'SMART TV',
    cena: 4.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 5.00 },
    ],
  },

// Premium TV - Premium MC2 08/25
  {
    typ: 'Premium TV',
    nazwa: 'Pakiet Eleven Sports',
    cena: 15.90,
    cenaAktywacji: 49.99,
    dlugoscUmowy: 12,
  },
  {
    typ: 'Premium TV',
    nazwa: 'Pakiet Cinemax',
    cena: 20.00,
    cenaAktywacji: 49.99,
    dlugoscUmowy: 12,
  },
  {
    typ: 'Premium TV',
    nazwa: 'Pakiet Cinemax dla Abonentów Pakietu HBO HD',
    cena: 10.00,
    cenaAktywacji: 49.99,
    dlugoscUmowy: 12,
  },
  {
    typ: 'Premium TV',
    nazwa: 'Pakiet HBO HD + HBO Max',
    cena: 39.98,
    cenaAktywacji: 49.99,
    dlugoscUmowy: 12,
  },
  {
    typ: 'Premium TV',
    nazwa: 'Pakiet Fun Club',
    cena: 25.90,
    cenaAktywacji: 49.99,
    dlugoscUmowy: 12,
  },
  {
    typ: 'Premium TV',
    nazwa: 'Pakiet Filmbox Extra',
    cena: 15.54,
    cenaAktywacji: 49.99,
    dlugoscUmowy: 12,
  },
  {
    typ: 'Premium TV',
    nazwa: 'Pakiet Filmy i Seriale',
    cena: 10.36,
    cenaAktywacji: 49.99,
    dlugoscUmowy: 12,
  },
  {
    typ: 'Premium TV',
    nazwa: 'Pakiet Dzieci',
    cena: 8.28,
    cenaAktywacji: 49.99,
    dlugoscUmowy: 12,
  },
  {
    typ: 'Premium TV',
    nazwa: 'Pakiet Sport HD Extra',
    cena: 18.64,
    cenaAktywacji: 49.99,
    dlugoscUmowy: 12,
  },
  {
    typ: 'Premium TV',
    nazwa: 'Pakiet HD',
    cena: 19.68,
    cenaAktywacji: 49.99,
    dlugoscUmowy: 12,
  },

// Premium TV - CANAL+ MC2 08/25
  {
    typ: 'Premium TV',
    nazwa: 'Canal+ Seriale i Filmy',
    cena: 25.00,
    cenaAktywacji: 4.99,
    dlugoscUmowy: 12,
  },
  {
    typ: 'Premium TV',
    nazwa: 'Canal+ Super Sport',
    cena: 65.00,
    cenaAktywacji: 4.99,
    dlugoscUmowy: 12,
  },
//

  {
    typ: 'Premium TV',
    nazwa: 'Pakiet Eleven Sports',
    cena: 14.99,
    cenaAktywacji: 4.99,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Premium TV',
    nazwa: 'Pakiet Cinemax',
    cena: 10.00,
    cenaAktywacji: 4.99,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Premium TV',
    nazwa: 'Pakiet Cinemax dla Abonentów Pakietu HBO HD',
    cena: 5.00,
    cenaAktywacji: 4.99,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Premium TV',
    nazwa: 'Pakiet HBO HD + HBO Max',
    cena: 31.98,
    cenaAktywacji: 4.99,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Premium TV',
    nazwa: 'Pakiet Fun Club',
    cena: 15.99,
    cenaAktywacji: 4.99,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Premium TV',
    nazwa: 'Pakiet Filmbox Extra',
    cena: 10.99,
    cenaAktywacji: 4.99,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Premium TV',
    nazwa: 'Pakiet Filmy i Seriale',
    cena: 8.99,
    cenaAktywacji: 4.99,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Premium TV',
    nazwa: 'Pakiet Dzieci',
    cena: 7.99,
    cenaAktywacji: 4.99,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Premium TV',
    nazwa: 'Pakiet Sport HD Extra',
    cena: 10.99,
    cenaAktywacji: 4.99,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Premium TV',
    nazwa: 'Pakiet HD',
    cena: 10.99,
    cenaAktywacji: 4.99,
    dlugoscUmowy: 24,
  },

// Premium TV - CANAL+ MC2 08/25
  {
    typ: 'Premium TV',
    nazwa: 'Canal+ Seriale i Filmy',
    cena: 25.00,
    cenaAktywacji: 4.99,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Premium TV',
    nazwa: 'Canal+ Super Sport',
    cena: 65.00,
    cenaAktywacji: 4.99,
    dlugoscUmowy: 24,
  },
//

// Internet i Telewizja - Mega Paczka MC2 08/25
  {
    typ: 'Internet i Telewizja',
    nazwa: 'FEST NET - 150/10 Mb/s',
    cena: 61.99,
    cenaAktywacji: 99.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'FEST NET - 300/25 Mb/s',
    cena: 67.99,
    cenaAktywacji: 99.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'FEST NET - 650/50 Mb/s',
    cena: 77.99,
    cenaAktywacji: 99.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'FEST NET - 900/60 Mb/s',
    cena: 87.99,
    cenaAktywacji: 99.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'StartBox - 68 kanałów TV',
    cena: 75.99,
    cenaAktywacji: 99.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'MiniBox - 104 kanały TV',
    cena: 80.99,
    cenaAktywacji: 99.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'SuperBox - 144 kanały TV',
    cena: 85.99,
    cenaAktywacji: 99.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'MaxBox - 163 kanały TV',
    cena: 90.99,
    cenaAktywacji: 99.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'FEST NET - 150/10 Mb/s',
    cena: 56.99,
    cenaAktywacji: 69.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'FEST NET - 300/25 Mb/s',
    cena: 62.99,
    cenaAktywacji: 69.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'FEST NET - 650/50 Mb/s',
    cena: 72.99,
    cenaAktywacji: 69.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'FEST NET - 900/60 Mb/s',
    cena: 82.99,
    cenaAktywacji: 69.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'StartBox - 68 kanałów TV',
    cena: 65.99,
    cenaAktywacji: 69.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'MiniBox - 104 kanały TV',
    cena: 70.99,
    cenaAktywacji: 69.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'SuperBox - 144 kanały TV',
    cena: 75.99,
    cenaAktywacji: 69.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'MaxBox - 163 kanały TV',
    cena: 80.99,
    cenaAktywacji: 69.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },

// Internet i Telewizja - Trzymaj z Nami Net i TV + SMART TV MC2 09/25
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - 150/10 Mb/s',
    cena: 61.70,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - 300/25 Mb/s',
    cena: 67.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - 650/50 Mb/s',
    cena: 77.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - 900/60 Mb/s',
    cena: 87.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z anmi - StartBox - 68 kanałów TV',
    cena: 75.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - MiniBox - 104 kanały TV',
    cena: 80.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - SuperBox - 144 kanały TV',
    cena: 85.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - MaxBox - 163 kanały TV',
    cena: 88.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - 150/10 Mb/s',
    cena: 51.70,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - 300/25 Mb/s',
    cena: 57.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - 650/50 Mb/s',
    cena: 67.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - 900/60 Mb/s',
    cena: 77.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - StartBox - 68 kanałów TV',
    cena: 65.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - MiniBox - 104 kanały TV',
    cena: 70.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - SuperBox - 144 kanały TV',
    cena: 75.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - MaxBox - 163 kanały TV',
    cena: 78.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },

// Internet i Telewizja' - Dla Dwojga Canal+, HBO Max, TV i Net + SMART TV MC2 09/25
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Dla Dwojga - 300/25 Mb/s',
    cena: 56.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Dla Dwojga - 650/50 Mb/s',
    cena: 67.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Dla Dwojga - 900/60 Mb/s',
    cena: 77.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Dla Dwojga - StartBox + Canal+ Seriale i Filmy + HBO + HBO Max',
    cena: 107.97,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Dla Dwojga - MiniBox + Canal+ Seriale i Filmy + HBO + HBO Max',
    cena: 112.97,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Dla Dwojga - SuperBox + Canal+ Seriale i Filmy + HBO + HBO Max',
    cena: 117.97,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Dla Dwojga - MaxBox + Canal+ Seriale i Filmy + HBO + HBO Max',
    cena: 122.97,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Dla Dwojga - StartBox + Canal+ Super Sport + HBO + HBO Max',
    cena: 147.97,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Dla Dwojga - MiniBox + Canal+ Super Sport + HBO + HBO Max',
    cena: 152.97,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Dla Dwojga - SuperBox + Canal+ Super Sport + HBO + HBO Max',
    cena: 157.97,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Dla Dwojga - MaxBox + Canal+ Super Sport + HBO + HBO Max',
    cena: 162.97,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },

  {
    typ: 'Internet i Telewizja',
    nazwa: 'SMART TV',
    cena: 4.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 5.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'SMART TV',
    cena: 4.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 5.00 },
    ],
  },

// Internet i Telewizja - Extra Paczki MC2 08/25
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Extra Paczki - FEST NET 650/50 Mb/s + MiniBox + Eleven Sports',
    cena: 141.98,
    cenaAktywacji: 219.88,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
      { nazwa: 'Dekoder', cena: 0.00},
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Extra Paczki - FEST NET 650/50 Mb/s + FON Normalny+',
    cena: 97.99,
    cenaAktywacji: 119.98,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Extra Paczki - FEST NET 650/50 Mb/s + MiniBox + Eleven Sports',
    cena: 117.98,
    cenaAktywacji: 149.88,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
      { nazwa: 'Dekoder', cena: 0.00},
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Extra Paczki - FEST NET 650/50 Mb/s + FON Normalny+',
    cena: 77.99,
    cenaAktywacji: 79.98,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },

// Abonament komórkowy - FON Senior MC2 08/25 i FON Mobil MC2 08/25
  {
    typ: 'Abonament komórkowy',
    nazwa: 'FON Senior ',
    cena: 19.90,
    cenaAktywacji: 9.90,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Abonament komórkowy',
    nazwa: 'FON Normalny+ - 21 GB ',
    cena: 23.99,
    cenaAktywacji: 4.99,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Abonament komórkowy',
    nazwa: 'FON Normalny+ - 31 GB ',
    cena: 29.99,
    cenaAktywacji: 4.99,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Abonament komórkowy',
    nazwa: 'FON Normalny 100 - 100 GB ',
    cena: 49.99,
    cenaAktywacji: 4.99,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Abonament komórkowy',
    nazwa: 'FON EURO - 7 GB ',
    cena: 49.90,
    cenaAktywacji: 4.99,
    dlugoscUmowy: 24,
  },

// Telefon stacjonarny - FON Domowy MC2 08/25
  {
    typ: 'Telefon stacjonarny',
    nazwa: 'FON DOMOWY Senior',
    cena: 5.05,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    promocja: { cena: 1.23, czasTrwania: 3 }
  },
  {
    typ: 'Telefon stacjonarny',
    nazwa: 'FON DOMOWY Startowy - 50 minut',
    cena: 10.09,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    promocja: { cena: 1.23, czasTrwania: 3 }
  },
  {
    typ: 'Telefon stacjonarny',
    nazwa: 'FON DOMOWY 150',
    cena: 17.22,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    promocja: { cena: 1.23, czasTrwania: 3 }
  },
  {
    typ: 'Telefon stacjonarny',
    nazwa: 'FON DOMOWY 500',
    cena: 39.90,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    promocja: { cena: 1.23, czasTrwania: 3 }
  },
  {
    typ: 'Telefon stacjonarny',
    nazwa: 'FON DOMOWY 2000',
    cena: 59.90,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    promocja: { cena: 1.23, czasTrwania: 3 }
  },

// Open TV - OPEN TV 08/25
  {
    typ: 'Open TV',
    nazwa: 'SMART TV S',
    cena: 13.57,
    cenaAktywacji: 9.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 8.28 },
    ],
  },
  {
    typ: 'Open TV',
    nazwa: 'SMART TV M',
    cena: 43.57,
    cenaAktywacji: 9.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 8.28 },
    ],
  },
  {
    typ: 'Open TV',
    nazwa: 'SMART TV L',
    cena: 58.57,
    cenaAktywacji: 9.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 8.28 },
    ],
  },
  {
    typ: 'Open TV',
    nazwa: 'SMART TV S',
    cena: 8.57,
    cenaAktywacji: 9.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 8.28 },
    ],
  },
  {
    typ: 'Open TV',
    nazwa: 'SMART TV M',
    cena: 38.57,
    cenaAktywacji: 9.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 8.28 },
    ],
  },
  {
    typ: 'Open TV',
    nazwa: 'SMART TV L',
    cena: 53.57,
    cenaAktywacji: 9.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 8.28 },
    ],
  },
  {
    typ: 'Open TV',
    nazwa: 'SMART TV S',
    cena: 23.57,
    cenaAktywacji: 9.99,
    dlugoscUmowy: 999,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 8.28 },
    ],
  },
  {
    typ: 'Open TV',
    nazwa: 'SMART TV M',
    cena: 48.57,
    cenaAktywacji: 9.99,
    dlugoscUmowy: 999,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 8.28 },
    ],
  },
  {
    typ: 'Open TV',
    nazwa: 'SMART TV L',
    cena: 63.57,
    cenaAktywacji: 9.99,
    dlugoscUmowy: 999,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 8.28 },
    ],
  },
];