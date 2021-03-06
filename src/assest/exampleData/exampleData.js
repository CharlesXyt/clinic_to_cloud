const bmiReferenceProps = {
    id: 'bmi',
    observationName: 'BMI - Body mass index',
    dataElements: [
      {
        id: 'name',
        displayName: 'Name',
        type: 'textInput',
        display: true,
        isRequired: true,
        value:"",
        valid:false,
        firstTimeLoading:true,
        message:"*need to input a first and last name (separated by a space)."
      },
      {
        id: 'gender',
        displayName: 'Gender',
        type: 'select',
        options: [
          {
            id: 1,
            name: 'Male',
            isDefault: true,
            sortOrder: 1,
          },
          {
            id: 2,
            name: 'Female',
            isDefault: false,
            sortOrder: 2,
          },
        ],
        display: true,
        isRequired: false,
        value:"Male",
        firstTimeLoading:true,
        valid:true
      },
      {
        id: 'weight',
        displayName: 'Weight',
        unitOfMeasure: 'kg',
        type: 'numberInput',
        bounds: {
          upperLimit: 1000,
          lowerLimit:0
        },
        display: true,
        isRequired: true,
        value:"",
        valid:false,
        firstTimeLoading:true,
        message:"*should not exceed 1000 or lower than 0"
      },
      {
        id: 'height',
        displayName: 'Height',
        unitOfMeasure: 'cm',
        type: 'numberInput',
        bounds: {
          upperLimit: 300,
          lowerLimit:0
        },
        display: true,
        isRequired: true,
        value:"",
        valid:false,
        firstTimeLoading:true,
        message:"*should not exceed 300 or lower than 0"
      },
      {
        id: 'bmi',
        displayName: 'BMI',
        unitOfMeasure: 'kg/m2',
        type: 'numberInput',
        bounds: {
          upperLimit: 100,
          lowerLimit:0
        },
        display: false,
        isRequired: false,
        value:"",
        firstTimeLoading:true,
        valid:true
      },
    ],
  };
  
  const headCircumferenceReferenceProps = {
    id: 'head-circumference',
    observationName: 'Head Circumference',
    dataElements: [
      {
        id: 'name',
        displayName: 'Name',
        type: 'textInput',
        display: true,
        isRequired: true,
        value:"",
        valid:false,
        firstTimeLoading:true,
        message:"*need to input a first and last name (separated by a space)."
      },
      {
        id: 'gender',
        displayName: 'Gender',
        type: 'select',
        options: [
          {
            id: 1,
            name: 'Male',
            isDefault: true,
            sortOrder: 1,
          },
          {
            id: 2,
            name: 'Female',
            isDefault: false,
            sortOrder: 2,
          },
        ],
        display: true,
        isRequired: false,
        value:"Male",
        firstTimeLoading:true,
        valid:true
      },
      {
        id: 'head-circumference',
        displayName: 'Head Circumference',
        unitOfMeasure: 'cm',
        type: 'numberInput',
        bounds: {
          upperLimit: 1000,
          lowerLimit:0
        },
        display: true,
        isRequired: true,
        value:"",
        valid:false,
        firstTimeLoading:true,
        message:"*should not exceed 1000 or lower than 0"
      },
    ],
  };

  export {
      bmiReferenceProps,
      headCircumferenceReferenceProps
    }

  