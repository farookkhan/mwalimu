import { SkillBuilders } from 'ask-sdk-core'

import {
  LaunchRequestHandler,
  HelloWorldIntentHandler,
  HelpIntentHandler,
  CancelAndStopIntentHandler,
  SessionEndedRequestHandler,
  ErrHandler
} from './handlers/ts-handlers'

export const handler = SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    HelloWorldIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrHandler)
  .lambda();
