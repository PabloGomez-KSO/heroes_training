export class Hero {

  _id?: number;
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
}
