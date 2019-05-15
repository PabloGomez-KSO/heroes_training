export class Hero {

  _id: number;
  _name: string;
  _height:  number;
  _picture: string;
  _nickname: string;

  constructor(id, name, height, picture, nickname){
     this._id = id;
     this._name = name;
     this._picture = picture;
     this._nickname = nickname;
     this._height = height;
  }

  convertHeightToMeters(height: number): string{
    let heightInMeters = height*0.3048;
    return heightInMeters.toFixed(2);
  }

  public getIdString(){
    if( this._id === 1){
      return this._id+"st";
    }
    else if(this._id  === 2){
      return this._id+"nd";
    }
    else if(this._id === 3){
      return this._id+"rd";
    }
    else{
      return this._id+"th";
    }

  }
}
