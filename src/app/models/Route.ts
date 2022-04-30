export interface Route {
  id$: string,
  status: string,
  startTimestamp: string,
  endTimestamp: string,
  startAddress: string,
  endAddress: string,
  price: number,
  passengerQuantity: string,
  needLuggageRack: boolean,
  vehicleId: string,
  vehicleModel: string,
  driverId: string,
  driverName: string
}
