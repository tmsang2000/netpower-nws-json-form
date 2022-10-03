# tmsang2000-json-form

# JSON Form

*By [tmsang2000](https://github.com/tmsang2000)*

[![Latest Stable Version](http://img.shields.io/packagist/v/endroid/qr-code.svg)](https://packagist.org/packages/endroid/qr-code)
[![Build Status](https://github.com/endroid/qr-code/workflows/CI/badge.svg)](https://github.com/endroid/qr-code/actions)
[![Total Downloads](http://img.shields.io/packagist/dt/endroid/qr-code.svg)](https://packagist.org/packages/endroid/qr-code)
[![Monthly Downloads](http://img.shields.io/packagist/dm/endroid/qr-code.svg)](https://packagist.org/packages/endroid/qr-code)
[![License](http://img.shields.io/packagist/l/endroid/qr-code.svg)](https://packagist.org/packages/endroid/qr-code)

This library helps you generate a simple Form with JSON input. Makes use of [@mui/material](https://github.com/mui/material-ui)
to generate the styled input. The main purpose for creating this library is to deal with dynamic form problem. Dynamic form is a form whose 
input list can be changed for different purpose. By using this library, you can custom your form input list to json format without fixing it on the database.

## Sponsored by

[![Netpower.no](assets/sponsored_logo.png)](https://www.netpower.vn/)

## Installation

Use [NPM](https://www.npmjs.com/) to install the library.

``` bash
$ npm install @tmsang2000/tmsang2000-json-form
```

## Usage

```php
use Endroid\QrCode\Builder\Builder;
use Endroid\QrCode\Encoding\Encoding;
use Endroid\QrCode\ErrorCorrectionLevel\ErrorCorrectionLevelHigh;
use Endroid\QrCode\Label\Alignment\LabelAlignmentCenter;
use Endroid\QrCode\Label\Font\NotoSans;
use Endroid\QrCode\RoundBlockSizeMode\RoundBlockSizeModeMargin;
use Endroid\QrCode\Writer\PngWriter;
$result = Builder::create()
    ->writer(new PngWriter())
    ->writerOptions([])
    ->data('Custom QR code contents')
    ->encoding(new Encoding('UTF-8'))
    ->errorCorrectionLevel(new ErrorCorrectionLevelHigh())
    ->size(300)
    ->margin(10)
    ->roundBlockSizeMode(new RoundBlockSizeModeMargin())
    ->logoPath(__DIR__.'/assets/symfony.png')
    ->labelText('This is the label')
    ->labelFont(new NotoSans(20))
    ->labelAlignment(new LabelAlignmentCenter())
    ->build();
```

## Usage: without using the builder

```php
import { JSONForm } from '@tmsang2000/tmsang2000-json-form';

const testFormData = JSON.stringify({
  label: 'Declaration',
  formFields: [
    {
      id: 'mass_purity_uncertainty',
      name: 'mass_purity_uncertainty',
      label: '1. Is there any uncertainty about the mass purity?*',
      type: 'radio',
      inputProps: {
        sx: {
          mt: '8px',
        },
      },
      options: [
        {
          label: 'No',
          value: 'no',
        },
        {
          label: 'Yes',
          value: 'yes',
        },
      ],
    },
    {
      id: 'mass_purity_uncertainty_explanation',
      name: 'mass_purity_uncertainty_explanation',
      label: 'Describe impurity',
      inputProps: {
        multiline: true,
        rows: 4,
        variant: 'filled',
      },
    },
    {
      id: 'mass_origination',
      name: 'mass_origination',
      label: '2. Where the mass is originating from?*',
      type: 'checkbox',
      inputProps: {
        sx: {
          mt: '8px',
        },
      },
      options: [
        {
          name: 'road_originating',
          label: 'Roads or railroads',
        },
        {
          name: 'industy_originating',
          label: 'Industrial, gas station, workshop or similar',
        },
        {
          name: 'city_originating',
          label: 'City area',
        },
      ],
    },
    {
      id: 'polution_completed',
      name: 'polution_completed',
      label: '3. Has the pollution analysis been completed?*',
      type: 'radio',
      inputProps: {
        sx: {
          mt: '8px',
        },
      },
      options: [
        {
          label: 'No',
          value: 'no',
        },
        {
          label: 'Yes',
          value: 'yes',
        },
      ],
    },
    {
      id: 'polution_completed_explanation',
      name: 'polution_completed_explanation',
      label: 'Describe why not',
      inputProps: {
        multiline: true,
        rows: 4,
        variant: 'filled',
      },
    },
  ],
});

const defaultFormErrors = {
  mass_purity_uncertainty: false,
  mass_purity_uncertainty_explanation: false,
  mass_origination: false,
  polution_completed: false,
  polution_completed_explanation: false,
}

function App() {
  const [controlledFormValue, setControlledFormValue] = React.useState<any>({});
  const [formErrors, setFormErrors] = React.useState({
    mass_purity_uncertainty: false,
    mass_purity_uncertainty_explanation: false,
    mass_origination: false,
    polution_completed: false,
    polution_completed_explanation: false,
  });

  const onSubmit = (e: any) => {
    if (!validateForm()) return;
    console.log("Controlled form value: ", controlledFormValue);
  }

  const validateForm = () => {
    let flag = true;
    const newFormErrors = { ...defaultFormErrors };
    if (!controlledFormValue?.mass_purity_uncertainty) {
      newFormErrors.mass_purity_uncertainty = true;
      flag = false;
    }
    if (!controlledFormValue?.mass_purity_uncertainty_explanation) {
      newFormErrors.mass_purity_uncertainty_explanation = true;
      flag = false;
    }
    if (!controlledFormValue?.mass_origination?.road_originating) {
      newFormErrors.mass_origination = true;
      flag = false;
    }
    if (!controlledFormValue?.mass_origination?.industy_originating) {
      newFormErrors.mass_origination = true;
      flag = false;
    }
    if (!controlledFormValue?.mass_origination?.city_originating) {
      newFormErrors.mass_origination = true;
      flag = false;
    }
    if (!controlledFormValue?.polution_completed) {
      newFormErrors.polution_completed = true;
      flag = false;
    }
    if (!controlledFormValue?.polution_completed_explanation) {
      newFormErrors.polution_completed_explanation = true;
      flag = false;
    }
    setFormErrors(newFormErrors);
    return flag;
  }

  return (
    <div className="App">
      <div style={{ width: 500, padding: 20 }}>
        <JSONForm 
          formData={testFormData} 
          formValue={controlledFormValue}
          onChange={setControlledFormValue}
          formProps={{
            ref: myRef,
            component: 'form',
            sx: {
              width: '28.5rem',
              display: 'flex',
              flexDirection: 'column',
              mb: '16px',
              gap: '16px',
            },
          }}
          titleStyles={{
            mt: '16px',
            fontWeight: 600,
            lineHeight: '1.4rem',
            fontSize: '1.15rem',
          }}
          formErrors={formErrors}
        />
        <button
          style={{
            marginTop: 10,
          }}
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
```