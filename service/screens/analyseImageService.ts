import { Response } from "model/response"
import { predictImage } from "service/artifact/artifactService"

export const analyseImage = async (imageUri: any) => {
    const response: Response = {
        status: false,
        message: "Image not found!",
        data: null
    }

    if (imageUri === null) {
        return response;
    }

    // analyse the image
    try {

        const results = await predictImage(imageUri);
        response.status = true;
        response.message = "Image analysed successfully!";
        response.data = results;
        return response;

    } catch (error) {
        console.log(error);
    }

}