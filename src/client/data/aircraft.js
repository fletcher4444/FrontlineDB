const GermanyAircraft =   
 {
  "name": "Germany",
  "aircraft": [
    {
      "id": "aircraft-1",
      "name": "Messerschmitt Bf 109",
      "type": "Fighter",
      "manufacturer": "Messerschmitt",
      "yearIntroduced": 1937,
      "country": "Germany"
    },
    {
      "id": "aircraft-2",
      "name": "Focke-Wulf Fw 190",
      "type": "Fighter",
      "manufacturer": "Focke-Wulf",
      "yearIntroduced": 1939,
      "country": "Germany"
    },
    {
      "id": "aircraft-3",
      "name": "Heinkel He 111",
      "type": "Bomber",
      "manufacturer": "Heinkel",
      "yearIntroduced": 1935,
      "country": "Germany"
    
    }
  ]
  }

  const USAAircraft =   
 {
  "name": "USA",
  "aircraft": [
    {
      "id": "aircraft-4",
      "name": "North American P-51 Mustang",
      "type": "Fighter",
      "manufacturer": "North American Aviation",
      "yearIntroduced": 1940,
      "country": "USA"
    },
    {
      "id": "aircraft-5",
      "name": "Boeing B-17 Flying Fortress",
      "type": "Bomber",
      "manufacturer": "Boeing",
      "yearIntroduced": 1938,
      "country": "USA"
    },
    {
      "id": "aircraft-6",
      "name": "Douglas C-47 Skytrain",
      "type": "Transport",
      "manufacturer": "Douglas Aircraft Company",
      "yearIntroduced": 1941,
      "country": "USA"
    }
  ]
}   

const britishAircraft =   
 {
  "name": "United Kingdom",
  "aircraft": [
    {
      "id": "aircraft-7",
      "name": "Supermarine Spitfire",
      "type": "Fighter",
      "manufacturer": "Supermarine",
      "yearIntroduced": 1938,
      "country": "United Kingdom"
    },
    {
      "id": "aircraft-8",
      "name": "Avro Lancaster",
      "type": "Bomber",
      "manufacturer": "Avro",
      "yearIntroduced": 1942,
      "country": "United Kingdom"
    },
    {
      "id": "aircraft-9",
      "name": "De Havilland Mosquito",
      "type": "Multirole",
      "manufacturer": "De Havilland",
      "yearIntroduced": 1941,
      "country": "United Kingdom"
    }
  ]
} 

const russianAircraft =   
 {
  "name": "Russia",
  "aircraft": [
    {
      "id": "aircraft-10",
      "name": "Yakolev Yak-3",
      "type": "Fighter",
      "manufacturer": "Yakolev",
      "yearIntroduced": 1944,
      "country": "Russia"
    },
    {
      "id": "aircraft-11",
      "name": "Ilyushin Il-2 Sturmovik",
      "type": "Ground Attack",
      "manufacturer": "Ilyushin",
      "yearIntroduced": 1941,
      "country": "Russia"
    },
    {
      "id": "aircraft-12",
      "name": "Tupolev Tu-2",
      "type": "Bomber",
      "manufacturer": "Tupolev",
      "yearIntroduced": 1941,
      "country": "Russia"
    }
  ]
}   
const JapanAircraft =   
 {
  "name": "Japan",
  "aircraft": [
    {
      "id": "aircraft-13",
      "name": "Mitsubishi A6M Zero",
      "type": "Fighter",
      "manufacturer": "Mitsubishi",
      "yearIntroduced": 1940,
      "country": "Japan"
    },
    {
      "id": "aircraft-14",
      "name": "Nakajima Ki-43 Oscar",
      "type": "Fighter",
      "manufacturer": "Nakajima Aircraft Company",
      "yearIntroduced": 1939,
      "country": "Japan"
    },
    {
      "id": "aircraft-15",
      "name": "Mitsubishi G4M Betty",
      "type": "Bomber",
      "manufacturer": "Mitsubishi",
      "yearIntroduced": 1941,
      "country": "Japan"
    }
  ]
} 


export const AircraftData = {
  Germany: GermanyAircraft,
  USA: USAAircraft,
  UnitedKingdom: britishAircraft,
  Russia: russianAircraft,
  Japan: JapanAircraft
};


export default AircraftData;