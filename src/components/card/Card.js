import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    alignItems: "center",
    margin: "1rem",
    backgroundColor: "#252525",
    color: "#fff",
  },
}))

const MediaCard = ({ name, thumbnail, description }) => {
  const classes = useStyles()

  const IMG_API = `${thumbnail.path}/landscape_xlarge.${thumbnail.extension}`

  return (
    <Card className={classes.root}>
      <CardMedia alt={name} component="img" image={IMG_API} />

      <CardContent>
        <Typography component="div">
          <Box fontSize={16} fontWeight="fontWeightBold">
            {name}
          </Box>
        </Typography>

        <Typography variant="body2" component="span">
          <Box
            fontSize={14}
            fontWeight="fontWeightBold"
            textAlign="left"
            marginTop="10px"
            color="#11698e">
            Description
          </Box>
          {description ? "" + description : "Description not available."}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default MediaCard
