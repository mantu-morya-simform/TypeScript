type CreateDataShape<dataType, errorType> = {
  data: dataType;
  error: errorType;
};

type MyShape1 = CreateDataShape<string, TypeError>;
/*
  {data:string, error:TypeError}
*/
type MyShape2 = CreateDataShape<boolean, SyntaxError>;
/*
  {data:boolean, error:SyntaxError}
*/

// modify above question such that if no Error type is passed then default error type will be TypeError.

type CreateDataShapeModified<dataType, errorType = TypeError> = {
  data: dataType;
  error: errorType;
};

type MyShape3 = CreateDataShapeModified<boolean>;
