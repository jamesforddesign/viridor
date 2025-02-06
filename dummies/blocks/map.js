{
    type: "map",
    bgColour: "",

    search: true,
    sections: "map-datafile", // This can either be an array or string with a corresponding datafile in the "maps" directory (this is the name of the file e.g. "one")
    center: {
        lat: "",
        lng: ""
    },
    maxZoom: 17,
    zoom: 11,
    overlay: "" // KMZ import requires public facing URL. Upload KMZ to S3 bucket
}
