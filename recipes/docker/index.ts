import {RecipeBuilder} from "@blitzjs/installer"
import {join} from "path"

export default RecipeBuilder()
  .setName("Dockerfile")
  .setDescription("Add Dockerfile and .dockerignore")
  .setOwner("arek.bartnik@gmail.com")
  .setRepoLink("https://github.com/blitz-js/blitz")
  .addNewFilesStep({
    stepId: "addDocker",
    stepName: "Add Dockerfile and .dockerignore",
    explanation: ``,
    targetDirectory: ".",
    templatePath: join(__dirname, "templates"),
    templateValues: {},
  })
  .build()
