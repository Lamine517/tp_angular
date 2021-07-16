export class Qcm {
    public id: number
    public question: string;
    public reponse: string;
    public note: number;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getQuestion(): string {
        return this.question;
    }

    public setQuestion(question: string): void {
        this.question = question;
    }

    public getReponse(): string {
        return this.reponse;
    }

    public setReponse(reponse: string): void {
        this.reponse = reponse;
    }

    public getNote(): number {
        return this.note;
    }

    public setNote(note: number): void {
        this.note = note;
    }


    public constructor(Id:number , q:string , r: string , nts:number){
        this.id = Id;
        this.question = q;
        this.reponse = r;
        this.note = nts;
    }
}
