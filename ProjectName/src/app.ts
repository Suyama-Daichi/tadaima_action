import { APIGatewayEvent } from "aws-lambda";
import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

const endpoint = 'https://api.foursquare.com/v2/checkins/add';
const accecctoken = '4VELTRFRQOV2XMJ5YE3RMPJAZ3PQIGJCP5DFSZRQURA0EDXK'
const myHomeVenueId = '5ab986c1acc5f5643539aa6b'
const version = '20200401'
export async function lambdaHandler(event: APIGatewayEvent, context: any): Promise<any> {
    const fullfillment: FullfillmentEvent = JSON.parse(event.body as string);

    const result = await axios.post(endpoint, {},
    {
        params: {
            'venueId': myHomeVenueId,
            'shout': "[自動]どんちゃんが帰宅しました",
            'oauth_token': accecctoken,
            'v': version
        }
    });
    
    return {
        statusCode: 200,
        body: JSON.stringify({
            fulfillmentText: `おかえりなさい。${result.data.response.notifications[0].item.entities[0].value}回目の帰宅です。`
        })
    }
}