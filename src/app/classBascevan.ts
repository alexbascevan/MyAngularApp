export class Bascevan{
  bascevanName: string;
  bascevanId: number;
  bascevanEmail: string;
  bascevanCampus: string;
  bascevanImg: string;


  public constructor(name: string, id: number, email: string, campus: string, img: string){
      this.bascevanName = name;
      this.bascevanId = id;
      this.bascevanEmail = email;
      this.bascevanCampus = campus;
      this.bascevanImg = img;
  }
}

export class BascevanCountry{
  bascevanCountry: string;
  bascevanCapital: string;
  bascevanId: string;
  bascevanUnCode: number;
  bascevanAvgSalary: number;
  bascevanFlagImg: string;

  public constructor(country: string, capital: string,id: string, code: number, salary: number, img: string){
      this.bascevanCountry = country;
      this.bascevanCapital = capital;
      this.bascevanId = id;
      this.bascevanUnCode = code;
      this.bascevanAvgSalary = salary;
      this.bascevanFlagImg = img;
  }
}