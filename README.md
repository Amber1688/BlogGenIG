# BlogGenIG

Auto generate ideas from IG post

### Step1:

automateCrawling() - get instagram post detail

  

### Step2:

generateDesigns() - put all data into output JSON

  

### Step3:



Use ChatGPT to generate output title and output content with the following conversation -

  

> I'm writing a blog post about 15 ___ on Amazon. Remember this and
> not write anything yet.

>  give me 10 title ideas

  

> I will use “XXXX” for my title. please remember.

  

> write an intro paragraph for this blog. Must mention our picks are based on popularity and customer ratings. give me a version without mentioning the title

  

### Stept4:

downloadJSONFile(exportObj, exportName) - download output as a JSON file with a given name
