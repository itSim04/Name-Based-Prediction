export interface PredictionModel {

    name: String;
    age: Number;
    nationality: String[];
    gender: String;

    isEmpty?(): Boolean;

}