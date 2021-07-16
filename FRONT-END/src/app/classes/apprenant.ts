export class Apprenant {
    private __prenom: String;
    private __nom: String;
    private __age: number;
    private __sexe: String;
    private __filiere: String;
    private __notes: number[];
    private __profil?: any ;

    public constructor(prenom:String,nom:String,age:number,sexe:String,filiere:String,notes:number[],profil:any){
        this.__prenom = prenom;
        this.__nom = nom;
        this.__age = age;
        this.__sexe = sexe;
        this.__filiere = filiere;
        this.__notes = notes;
        this.__profil = profil;
    }

    
    public get prenom() : String {
        return this.__prenom;
    }
    public get nom() : String {
        return this.__nom;
    }
    public get age() : number {
        return this.__age;
    }
    public get sexe() : String {
        return this.__sexe;
    }
    public get filiere() : String {
        return this.__filiere;
    }
    public get notes() : number[] {
        return this.__notes;
    }
    public get profil() : any {
        return this.__profil;
    }

    
    public set prenom(v : String) {
        this.__prenom = v;
    }
    public set nom(v : String) {
        this.__nom = v;
    }
    public set age(v : number) {
        this.__age = v;
    }
    public set sexe(v : String) {
        this.__sexe = v;
    }
    public set filiere(v : String) {
        this.__filiere = v;
    }
    public set notes(v : number[]) {
        this.__notes = v;
    }
    public set profil(v : any) {
        this.__profil = v;
    }
}
