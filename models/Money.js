class Money{
    constructor(){
        this._knutsPerSickle = 17;
        this._sicklesPerGalleon = 29;
        this._totalKnuts = 0;
    }

    getGalleons(){
        const totalKnutsAsSickles = Math.floor(this._totalKnuts/this._knutsPerSickle);
        const totalKnutsAsGalleons = Math.floor(totalKnutsAsSickles/this._sicklesPerGalleon);
        return totalKnutsAsGalleons;
    }
    
    getSickles(){
        const remainderKnutsAfterGalleons = this._totalKnuts%(this._knutsPerSickle*this._sicklesPerGalleon);
        const sicklesAfterGalleons = Math.floor(remainderKnutsAfterGalleons/this._knutsPerSickle);
        return sicklesAfterGalleons;
    }

    getKnuts(){
        const remainderKnutsAfterSickles = this._totalKnuts%this._knutsPerSickle;
        return remainderKnutsAfterSickles;
    }

    getGalleonsSicklesKnuts(){
        return [this.getGalleons(), this.getSickles(), this.getKnuts()];
    }

    addOrRemoveKnuts(knutsToAdd){
        this._totalKnuts += knutsToAdd;
    }
}

export default Money; 