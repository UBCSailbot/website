export const AISShipsService = {
    * getAISShips(): Generator<any, any, any> {
        let isError = false;

        return yield fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/api/aisships`, {
            method: 'GET'
        })
            .then(response => {
                isError = response.status != 200;
                return response;
            })
            .then(response => response.json())
            .then(json => {
                if (isError) {
                    throw new Error(json.error);
                }
                return json.data;
            })
    }
}
