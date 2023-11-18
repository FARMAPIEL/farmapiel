/** An object able to programmatically obtain the position of the device. It gives Web content access to the location of the device. This allows a Web site or app to offer customized results based on the user's location. */
interface Geolocation {
    clearWatch(watchId: number): void;
    getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback | null, options?: PositionOptions): void;
    watchPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback | null, options?: PositionOptions): number;
}

declare var Geolocation: {
    prototype: Geolocation;
    new(): Geolocation;
};

/** Available only in secure contexts. */
interface GeolocationCoordinates {
    readonly accuracy: number;
    readonly altitude: number | null;
    readonly altitudeAccuracy: number | null;
    readonly heading: number | null;
    readonly latitude: number;
    readonly longitude: number;
    readonly speed: number | null;
}

declare var GeolocationCoordinates: {
    prototype: GeolocationCoordinates;
    new(): GeolocationCoordinates;
};

/** Available only in secure contexts. */
interface GeolocationPosition {
    readonly coords: GeolocationCoordinates;
    readonly timestamp: DOMTimeStamp;
}

declare var GeolocationPosition: {
    prototype: GeolocationPosition;
    new(): GeolocationPosition;
};

interface GeolocationPositionError {
    readonly code: number;
    readonly message: string;
    readonly PERMISSION_DENIED: number;
    readonly POSITION_UNAVAILABLE: number;
    readonly TIMEOUT: number;
}

declare var GeolocationPositionError: {
    prototype: GeolocationPositionError;
    new(): GeolocationPositionError;
    readonly PERMISSION_DENIED: number;
    readonly POSITION_UNAVAILABLE: number;
    readonly TIMEOUT: number;
};