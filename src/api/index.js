// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  const vehiclesList = await request('/api/vehicles.json');
  
  const vehicleProps = await Promise.all(
    vehiclesList.map((vehicle) => request(vehicle.apiUrl)
    .catch((error) => ({ error, vehicle })))
  );

  return vehiclesList.map((vehicle, index) => ({
    ...vehicle,
    price: vehicleProps[index].price ? vehicleProps[index].price : null,
    description: vehicleProps[index].description ? vehicleProps[index].description : null,
    meta: vehicleProps[index].meta ? vehicleProps[index].meta : null
  }));
}
