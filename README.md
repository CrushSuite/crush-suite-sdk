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
CrushSuite SDK includes two packages, `core` and `react`, depending on your needs. The core package includes helpers to create a client instance, and easily leverage all available CrushSuite APIs in a Node.js environment.

The React package includes helpers and components for managing customer and compliance information, UI for common needs, and tools to facilitate compliance checks.

### Core
***NOTE: All API requests should originate from a server. Do not expose your CrushSuite API keys to the client***

Import from either the root package, or `crush-suite-sdk/core`

To make an API request, first instantiate a client using your API keys, eg:

```typescript
import { createClient } from 'crush-suite-sdk'

export const crushSuiteClient = createClient({
  privateKey: process.env.CRUSH_SUITE_API_KEY!
});
```

Then, utilize one of the client methods to make your request.

#### Compliance
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

### React
Import helpers and components from `crush-suite-sdk/react`

#### Helpers

`USAStates` object that includes all 50 US states

#### Components


## Utilizing the CrushSuite API without the SDK

All requests should include an `x-api-key` header, containing your private key
