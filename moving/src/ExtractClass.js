function Dni(aDNI) {
    this.CARATER_POSITION = 8;
    this.VALID_CARACTER='a';
    this.ERROR_MESSAGE = 'bad DNI'
    this.DNI = ''; 

	this.validateDNI=function(aDNI){
        if (this.checkLetter(aDNI)) return true
		throw this.ERROR_MESSAGE;
	};

    this.checkLetter= function(aDNI){
        if (this. getLetter(aDNI) === this.VALID_CARACTER) return true
    };   

	this.setDNI = function(aDNI) {
	    this.DNI=aDNI;
	};

	this.getDNI = function() {
		return this.DNI;
	};

    this.getLetter = function(aDNI){
        return aDNI[this.CARATER_POSITION]
    };

    this.toString = function() {
        return this.DNI;
    };

    this.validateDNI(aDNI)
    this.setDNI(aDNI);
};

function Persona() {
	this.name='';
	this.weight='';
	this.height='';
	this.work='';
	this.bloodType=''
	this.DNI='';

	this.setDNI = function(aDNI) {
        this.DNI = new Dni(aDNI);
	};

	this.getDNI = function() {
		return this.DNI.toString();
	};

	this.gainWeight=function(someKilos){};

	this.looseWeight=function(someKilos){};

	this.changeWork=function(newWork){};
	
	this.newMeasure=function(aHeight){};

};
