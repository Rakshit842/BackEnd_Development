import express from "express";

const app = express();
const port = 3000;

app.get("/user", (req, res) => {
    try {
        res.json({
            message: "This is the user route....."
        });
    } catch (error) {
        res.json({
            message: "Something went wrong.....",
            error: error.message
        });
    }
});

function checkRoutes(res,req){
    res,json({
        message:'this routes is not available.....'
    })
}

app,use(checkRoutes)

app.listen(port, () => {
    console.log("Server has started at port", port);
});