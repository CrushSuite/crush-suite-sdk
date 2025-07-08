# CrushSuite SDK
A toolkit for using CrushSuite outside of a theme context.

[![npm version](https://img.shields.io/npm/v/@crushsuite/sdk.svg)](https://www.npmjs.com/package/@crushsuite/sdk)

## Setup
You'll first need to obtain API credentials by contacting CrushSuite Support for your account.
You will receive two keys, your private key, and your sandbox key. These should be kept secret, and stored in private environment variables.
For example:

```env
CRUSH_SUITE_API_KEY="pk_live_xxxxxxxxxxxxxxx"
```

## Usage
CrushSuite SDK includes two packages, `core` and `react`, depending on your needs. The core package includes helpers to create a client instance, and easily leverage all available CrushSuite APIs in a Node.js environment.

The React package includes helpers and components for managing customer and compliance information, UI for common needs, and tools to facilitate compliance checks.

## Core
***NOTE: All API requests should originate from a server. Do not expose your CrushSuite API keys to the client***

Import from either the root package, or `@crushsuite/sdk/core`

To make an API request, first instantiate a client using your API keys, eg:

```typescript
import { createClient } from '@crushsuite/sdk'

export const crushSuiteClient = createClient({
  privateKey: process.env.CRUSH_SUITE_API_KEY!
});
```

Then, utilize one of the client methods to make your request.

### Pre-Compliance Checks
Immediately before checkout, an order must be checked for compliance, and any applicable compliance fees need to be added to the cart, and a compliance check ID, and the customer date of birth must be set as cart attributes.
To check compliance, use:

```ts
crusSuiteClient.compliance.prepurchaseCompliance({
  variants: [
    { id, quantity },
    ...
  ],
  billToAddress: {
    firstName,
    lastName,
    businessName,
    street1,
    street2,
    city
    postalCode,
    stateCode,
    country,
  },
  shipToAddress: {
    firstName,
    lastName,
    businessName,
    street1,
    street2,
    city
    postalCode,
    stateCode,
    country,
  },
  dob: {
    day,
    month,
    year,
  },
  email,
  phoneNumber, // Must be 10-digit US phone number
})
```

Pre-compliance checks will return an object:

```ts
{
  valid: boolean;
  complianceFee: ComplianceFee | null;
  complianceKey: string | null;
  errors: string[];
}
```

- `valid` indicates if the order passed pre-compliance
- `complianceFee` will be the variant ID and quantity of compliance fees to add to the cart
- `complianceKey` is the unique ID of this cart compliance, to be passed as a cart attribute for verification on the API side
- `errors` Is an array of error messages (if any)

**Upon valid pre-compliance check, the cart must be updated to include:**

**Cart attributes:**

- Import attribute key constants from CrushSuite Core. `import { CART_CUSTOMER_DOB, CART_VALID_COMPLIANCE_ID } from '@crushsuite/sdk/core'`
- Customer date of Birth. Use the `CART_CUSTOMER_DOB` key, and `{ day, month, year }` for value
- Valid compliance check ID. Use key `CART_VALID_COMPLIANCE_ID` and value `complianceKey`

**Compliance Fees**

- Add any applicable compliance fees as cart line items
- Store the ID of the compliance fee in order to remove them if the user returns from checkout.

##### Next Steps:

Once the cart is updated with applicable attributes and compliance fees, you should redirect the user to checkout imediately.

If the user abandons checkout and returns to the site, you should immediately remove the compliance fee(s) from their cart,
using the stored ID of that item. This is to ensure that the proper amount of fees are added to the cart based on on the cart contents at time of checkout.

#### Compliance Events
To send compliance events (for analytics and logging), use:

```ts
crushSuiteClient.compliance.complianceEvent({
  sessionId: 'The Shopify session ID',
  eventType: 'INITIATED', // Or SUBMITTED, APPROVED, FAILED
  failedReason: '', // (Optional)
  failedPayload: string, // (Optional), format as JSON
  failedUser: string, // (Optional) format as JSON
})
```

### GraphQL Fragments
We include helpful GraphQL fragments for ease of use in querying Shopify for compliance-related data.

#### CartAttributesUpdateMutation
Use this mutation to update cart attributes (such as compliance info) on a Shopify cart.

```ts
import {
  CartAttributesUpdateMutation,
  type CartAttributesUpdateMutationVariables,
  type CartAttributesUpdateMutationResponse
} from '@crushsuite/sdk/core';
```

#### CrushSuiteShopQuery
Use this query to fetch shop metafields related to CrushSuite compliance configuration.

```ts
import {
  CrushSuiteShopQuery,
  type CrushSuiteShopQueryResponse
} from '@crushsuite/sdk/core';
```

#### CrushSuiteProductQuery
Use this query to fetch product details, including compliance partner and no-sale states for variants.

```ts
import { CrushSuiteProductQuery } from '@crushsuite/sdk/core';
```

### Typescript Types
Both packages export a variety of useful types & interfaces, for interacting with the SDK or for building your own functionality. Some notable types include:

- `USAStateAbbreviation` - A union of all 2-character USA State codes
- `PrecomplianceEventType` - A union of all the precompliance event types, for sending analytics events

### Helpers
For formatting user-input phone numbers, you can use:

```ts
import { formatPhoneNumber } from '@crushsuite/sdk/core';

const phoneNumber = formatPhoneNumber(inputPhoneNumber);
```

## React
Import helpers and components from `@crushsuite/sdk/react`

### Setup
Add the `CrushSuiteProvider` context at the top of your layout.

```ts
import { CrushSuiteProvider } from '@crushsuite/sdk/react';

export function Layout({ children }: {children?: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        ...
      </head>
      <body>
        <CrushSuiteProvider>
          {children}
        </CrushSuiteProvider>
      </body>
  );
}
```

### Vinoshipper Clubs
You can add the Vinoshipper Club embed using the `VinoshipperClubForm` component.

```ts
import { VinoshipperClubForm } from '@crushsuite/sdk/react';

const ClubForm = () => <VinoshipperClubForm accountId="xxxx" theme="green" darkMode={false}/>;
```

***Parameters:***
- `accountId` is the Vinoshipper account id for the merchant **(required)**
- `theme` sets the color theme of the embed **(optional)**. Possible values are:
  - `indigo`
  - `purple`
  - `pink`
  - `red`
  - `orange`
  - `yellow`
  - `green`
  - `teal`
  - `cyan`
  - `gray`
  - `black`
- `darkMode` toggles dark mode (boolean) **(optional)**

### Hooks
The `useCrushSuite` hook exposes relevant data and helpers to manage compliance on the front-end, provided by the CrushSuite context.

Data that can be used for compliance includes:
- `customerDOB` (string)
- `shippingState` (string)
- `ageVerified` (boolean)
- `complianceProduct` (number)

***Note: Context data is saved to cookies on update, and retrieved for the next session***


### Helpers

`USAStates` object that includes all 50 US states. Use this (or the `USA_STATE_SELECT_OPTIONS` array) to build shipping state selectors.

### Icons

We include several icons for ease of use:

- `USAIcon`
- `ShippingIcon`

### Components

#### Compliance Check Form

```ts
import { ComplianceCheckForm } from '@crushsuite/sdk/react';

<ComplianceCheckForm />
```


## Utilizing the CrushSuite API without the SDK

All requests should include an `x-api-key` header, containing your private key
