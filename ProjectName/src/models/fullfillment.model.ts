interface FullfillmentEvent {
    responseId: string;
    queryResult: QueryResult;
    originalDetectIntentRequest: OriginalDetectIntentRequest;
    session: string;
}

interface OriginalDetectIntentRequest {
    source: string;
    version: string;
    payload: Payload;
}

interface Payload {
    user: User;
    conversation: Conversation;
    inputs: Input[];
    surface: Surface;
    isInSandbox: boolean;
    availableSurfaces: Surface[];
    requestType: string;
}

interface Surface {
    capabilities: Capability[];
}

interface Capability {
    name: string;
}

interface Input {
    intent: string;
    rawInputs: RawInput[];
}

interface RawInput {
    inputType: string;
    query: string;
}

interface Conversation {
    conversationId: string;
    type: string;
}

interface User {
    locale: string;
    lastSeen: string;
    userVerificationStatus: string;
}

interface QueryResult {
    queryText: string;
    action: string;
    parameters: Parameters1;
    allRequiredParamsPresent: boolean;
    fulfillmentText: string;
    fulfillmentMessages: FulfillmentMessage[];
    outputContexts: OutputContext[];
    intent: Intent;
    intentDetectionConfidence: number;
    languageCode: string;
}

interface Intent {
    name: string;
    displayName: string;
}

interface OutputContext {
    name: string;
    parameters?: Parameters2;
}

interface Parameters2 {
    'no-input': number;
    'no-match': number;
}

interface FulfillmentMessage {
    text: Text;
}

interface Text {
    text: string[];
}

interface Parameters1 {
}