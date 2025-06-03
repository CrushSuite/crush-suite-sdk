# CrushSuite SDK
A toolkit for using CrushSuite outside of a theme context.

## Setup
You'll first need to obtain API credentials by contacting CrushSuite Support for your account.
You will receive two keys, your private key, and your sandbox key. These should be kept secret, and stored in private environment variables.
For example:

```env
CRUSH_SUITE_API_KEY="pk_live_xxxxxxxxxxxxxxx"
```

## Usage
***NOTE: All API requests should originate from a server. Do not expose your CrushSuite API keys to the client***

To make an API request, first instantiate a client using your API keys, eg:

```typescript
import { createClient } from 'crush-suite-sdk'

export const crushSuiteClient = createClient({
  privateKey: process.env.CRUSH_SUITE_API_KEY!
});
```

Then, utilize one of the client methods to make your request.

### Compliance



## Utilizing the CrushSuite API without the SDK

All requests should include an `x-api-key` header, containing your private key
