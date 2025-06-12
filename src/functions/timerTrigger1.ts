import { app, InvocationContext, Timer } from "@azure/functions";

export async function timer_testStorageReads( myTimer: Timer, context: InvocationContext ): Promise<void> {

    context.log('Timer function processed request.');
}

app.timer('timer_testStorageReads', {
    schedule: '0 0 0 * * *',
    handler: timer_testStorageReads
});