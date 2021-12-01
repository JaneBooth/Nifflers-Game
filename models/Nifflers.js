class Nifflers{
    constructor(){
        this._numberOfNifflers = 1;
        this._minimumKnutsPerNiffler = 1;
        this._maximumKnutsPerNiffler = 5; 
    }

    sendNifflers(){
        let knutsFound = 0;
        for (let i = 0; i < this._numberOfNifflers; i++){
            knutsFound += Math.floor(Math.random() * (this._maximumKnutsPerNiffler - this._minimumKnutsPerNiffler) + this._minimumKnutsPerNiffler)
        }

        return knutsFound;
    }

    getNumberOfNifflers(){
        return this._numberOfNifflers;
    }

    addNifflers(){
        this._numberOfNifflers += 1; 
    }
    
}

export default Nifflers; 