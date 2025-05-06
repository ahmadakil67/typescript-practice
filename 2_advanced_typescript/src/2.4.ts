{
  // Generic Interface
  interface Developers<T, X=null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releasYear: number;
    };
    smartWatch: T,
    bike?: X
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developers<EmilabWatch> = {
    name: "Akil",
    computer: {
      brand: "ASUS",
      model: "X255",
      releasYear: 2020,
    },
    smartWatch: {
      brand: "X",
      model: "Y",
      display: "Z",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
  }

  interface Bike{
    brand: string;
    engineCapacity: string;
  }
  const richhDeveloper: Developers<AppleWatch, Bike> = {
    name: "Rich Dev",
    computer: {
      brand: "HP",
      model: "X255",
      releasYear: 2020,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "something",
      heartTrack: true,
    },
    bike:{
        brand: "Yamaha",
        engineCapacity: "100cc"
    }
  };

  console.log(richhDeveloper)
}
