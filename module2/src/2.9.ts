{
    // Conditional Type

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type checkVehicle<T> = T extends keyof Vehicle ? true: false;
}