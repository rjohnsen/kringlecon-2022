---
sidebar_position: 2
---

# Windows Event Logs

> Investigate the Windows [event log](https://storage.googleapis.com/hhc22_player_assets/powershell.evtx) mystery in the terminal or offline. Get hints for this challenge by typing `hint` in the upper panel of the Windows Event Logs terminal.

****

For this assignment I decided to use Jupyter notebook to parse the log given. However, I had to download the said Windows log, open it in Windows Event Viewer, export it as CSV before I could toss some Pandas magic on it. 

### Jupyter setup

```python
import pandas as pd
import re
import warnings
warnings.simplefilter(action='ignore', category=FutureWarning)

pd.set_option('display.max_colwidth', None)

df = pd.read_csv(
    "powershell.csv",
    sep=",",
    header=0,
    names=[ "Level", "DateTime", "Origin", "EventID", "Task", "Category" ],
    index_col=False
)
```
## Question 1

> What month/day/year did the attack take place? For example, 09/05/2021

### Query

```python
df["DateOnly"] = pd.to_datetime(df["DateTime"]).dt.date
df.groupby("DateOnly").size().sort_values(ascending=False).iloc[:1]
```

The logic behind this query is simple: 

We extend the DataFrame with one more column holding the the date part of the timestamp. This makes it easier to group the data by date and count occurrences. By sorting in descending order and returning the first row, we got our answer:

```
DateOnly
2022-12-24    3540
dtype: int64
```

Date has to be formatted to match the requested date format (12/24/2022)

## Question 2

> An attacker got a secret from a file. What was the original file's name?

### Query

```python
q2df = df[ (df["DateOnly"] == pd.Timestamp("2022-12-24")) & (df["Category"].str.contains("Add-Content -Path"))]
q2df[ ["DateTime", "Category"] ]
```

### Query Result

```
	    DateTime 	            Category
2592 	24.12.2022 12:05:07 	Creating Scriptblock text (1 of 1):\n$foo | Add-Content -Path 'Recipe'\n\nScriptBlock ID: 00daf2d0-fd6e-4475-8f90-b99224cbe240\nPath:
2638 	24.12.2022 12:04:44 	Creating Scriptblock text (1 of 1):\n$foo | Add-Content -Path 'Recipe.txt'\n\nScriptBlock ID: c54e091b-147d-4b65-a84d-87ec7453fbbb\nPath:
2721 	24.12.2022 12:04:18 	Creating Scriptblock text (1 of 1):\n$foo | Add-Content -Path 'Recipe.txt'\n\nScriptBlock ID: 49f0e51a-bcd9-4a8f-a124-3512606afde7\nPath:
2804 	24.12.2022 12:03:55 	Creating Scriptblock text (1 of 1):\n$foo | Add-Content -Path 'Recipe.txt'\n\nScriptBlock ID: 8e5b9d7d-e1ff-40bc-8727-49ae9530af02\nPath:
2862 	24.12.2022 12:03:22 	Creating Scriptblock text (1 of 1):\n$foo | Add-Content -Path 'recipe_updated.txt'\n\nScriptBlock ID: e6033506-603f-4380-9be0-79880b40e95c\nPath:
2948 	24.12.2022 12:02:45 	Creating Scriptblock text (1 of 1):\n𝑓𝑜𝑜=𝐺𝑒𝑡−𝐶𝑜𝑛𝑡𝑒𝑛𝑡.\Recipe|
foo | Add-Content -Path 'recipe_updated.txt'\n\nScriptBlock ID: 6ea311a5-b9d2-40a6-a794-60e3f9539005\nPath:
3009 	24.12.2022 12:01:20 	Creating Scriptblock text (1 of 1):\n𝑓𝑜𝑜=𝐺𝑒𝑡−𝐶𝑜𝑛𝑡𝑒𝑛𝑡.\Recipe|
foo | Add-Content -Path 'recipe_updated.txt'\n\n\nScriptBlock ID: 1189c065-869d-4386-8386-456c7c89130f\nPath:
```
Answer is Recipe.txt

## Question 3

> The contents of the previous file were retrieved, changed, and stored to a variable by the attacker. This was done multiple times. Submit the last full Powershell line that performed on these actions

#### Query

```python
q3df = df[ (df["DateOnly"] == pd.Timestamp("2022-12-24")) & (df["Category"].str.contains("\$foo\s=\sGet-Content", regex=True))].sort_values(by="DateTime", ascending=False).iloc[:1]
q3df["Category"]
```

#### Query Result

```
2689    Creating Scriptblock text (1 of 1):\n$foo = Get-Content .\Recipe| % {$_ -replace 'honey', 'fish oil'}\n\nScriptBlock ID: 11c6e378-2879-460e-bcd9-06cdfa28c70a\nPath: 
Name: Category, dtype: object
```

## Question 4

> After storing the altered file contents into the variable, the attacker used the variable to run a separate command that wrote the modified data to a file. This was done multiple times. Submit the last full PowerShell line that performed only this action.

### Query

```python
q4df = df[ (df["DateOnly"] == pd.Timestamp("2022-12-24")) & (df["Category"].str.contains("\$foo \|", regex=True))].sort_values(by="DateTime", ascending=False).iloc[:1]
re.search(r"\n(.+)\n\n", q4df["Category"].iloc[0]).group(1)
```

### Query Result

"$foo | Add-Content -Path 'Recipe'"

## Question 5

> The attacker ran the previous command against a file multiple times. What is the name of this file?

### Query

```python
q5df = df[ (df["DateOnly"] == pd.Timestamp("2022-12-24")) & (df["Category"].str.contains("foo", regex=True))].sort_values(by="DateTime", ascending=False)
q5df[ ["DateTime", "Category"] ]

```

### Query Result

```
	    DateTime 	            Category
2592 	24.12.2022 12:05:07 	Creating Scriptblock text (1 of 1):\n$foo | Add-Content -Path 'Recipe'\n\nScriptBlock ID: 00daf2d0-fd6e-4475-8f90-b99224cbe240\nPath:
2638 	24.12.2022 12:04:44 	Creating Scriptblock text (1 of 1):\n$foo | Add-Content -Path 'Recipe.txt'\n\nScriptBlock ID: c54e091b-147d-4b65-a84d-87ec7453fbbb\nPath:
2689 	24.12.2022 12:04:37 	Creating Scriptblock text (1 of 1):\n𝑓𝑜𝑜=𝐺𝑒𝑡−𝐶𝑜𝑛𝑡𝑒𝑛𝑡.\Recipe|
_ -replace 'honey', 'fish oil'}\n\nScriptBlock ID: 11c6e378-2879-460e-bcd9-06cdfa28c70a\nPath:
2721 	24.12.2022 12:04:18 	Creating Scriptblock text (1 of 1):\n$foo | Add-Content -Path 'Recipe.txt'\n\nScriptBlock ID: 49f0e51a-bcd9-4a8f-a124-3512606afde7\nPath:
2772 	24.12.2022 12:04:10 	Creating Scriptblock text (1 of 1):\n𝑓𝑜𝑜=𝐺𝑒𝑡−𝐶𝑜𝑛𝑡𝑒𝑛𝑡.\Recipe|
_-replace 'honey','fish oil'}\n\nScriptBlock ID: e7266037-4244-4d41-96cc-9d2488d84bde\nPath:
2804 	24.12.2022 12:03:55 	Creating Scriptblock text (1 of 1):\n$foo | Add-Content -Path 'Recipe.txt'\n\nScriptBlock ID: 8e5b9d7d-e1ff-40bc-8727-49ae9530af02\nPath:
2862 	24.12.2022 12:03:22 	Creating Scriptblock text (1 of 1):\n$foo | Add-Content -Path 'recipe_updated.txt'\n\nScriptBlock ID: e6033506-603f-4380-9be0-79880b40e95c\nPath:
2913 	24.12.2022 12:03:10 	Creating Scriptblock text (1 of 1):\n𝑓𝑜𝑜=𝐺𝑒𝑡−𝐶𝑜𝑛𝑡𝑒𝑛𝑡.\Recipe|
_-replace 'honey','fish oil'}\n\nScriptBlock ID: b039d71f-52cc-41b7-acf6-a8ca43ad5035\nPath:
2948 	24.12.2022 12:02:45 	Creating Scriptblock text (1 of 1):\n𝑓𝑜𝑜=𝐺𝑒𝑡−𝐶𝑜𝑛𝑡𝑒𝑛𝑡.\Recipe|
foo | Add-Content -Path 'recipe_updated.txt'\n\nScriptBlock ID: 6ea311a5-b9d2-40a6-a794-60e3f9539005\nPath:
3009 	24.12.2022 12:01:20 	Creating Scriptblock text (1 of 1):\n𝑓𝑜𝑜=𝐺𝑒𝑡−𝐶𝑜𝑛𝑡𝑒𝑛𝑡.\Recipe|
foo | Add-Content -Path 'recipe_updated.txt'\n\n\nScriptBlock ID: 1189c065-869d-4386-8386-456c7c89130f\nPath:
```

The answer is Recipe.txt

## Question 6

> Where any files deleted? (Yes/No)

Answer is Yes

## Question 7

> Was the original file (from question 2) deleted? (Yes/No)

The answer is Yes

## Question 8

> What is the Event ID of the log that shows the actual command line used to delete the file?


### Query

```python
q8df = df[ (df["DateOnly"] == pd.Timestamp("2022-12-24")) & (df["Category"].str.contains("Recipe.txt"))].groupby("EventID").size().sort_values(ascending=True)
q8df
```

### Query Result

```
EventID
4104    4
4103    7
dtype: int64
```
The answer is 4104

## Question 9

> Is the secret ingredient compromised? (Yes/No)

The answer is Yes

## Question 10

> What is the secret ingredient?

### Query

```python
q10dfa = df[ (df["DateOnly"] == pd.Timestamp("2022-12-24")) & (df["Category"].str.contains("\$foo\s=\sGet-Content", regex=True))].sort_values(by="DateTime", ascending=False).iloc[:1]
q10dfa[["Category"]]
```

### Query Result

```
	    Category
2689 	Creating Scriptblock text (1 of 1):\n𝑓𝑜𝑜=𝐺𝑒𝑡−𝐶𝑜𝑛𝑡𝑒𝑛𝑡.\Recipe|
_ -replace 'honey', 'fish oil'}\n\nScriptBlock ID: 11c6e378-2879-460e-bcd9-06cdfa28c70a\nPath:
``` 

From this query, from question 3, we saw that the word "honey" was replaced with "fish oil".

### Query to validate answer

```python
q10dfb = df[ (df["DateOnly"] == pd.Timestamp("2022-12-24")) & (df["Category"].str.contains("honey|Honey", regex=True))].sort_values(by="DateTime", ascending=False).iloc[:1]
q10dfb
```

#### Validation Result

```
	    Level 			DateTime 				Origin 							EventID Task				Category 																						DateOnly
2542 	Informasjon 	24.12.2022 12:05:23 	Microsoft-Windows-PowerShell 	4103 	Executing Pipeline 	CommandInvocation(Out-Default): "Out-Default"\nParameterBinding(Out-Default): name="InputObject"; value="Recipe from Mixolydian, the Queen of Dorian"\nParameterBinding(Out-Default): name="InputObject"; value="Lembanh Original Recipe"\nParameterBinding(Out-Default): name="InputObject"; value=" "\nParameterBinding(Out-Default): name="InputObject"; value="2 1/2 all purpose flour"\nParameterBinding(Out-Default): name="InputObject"; value="1 Tbsp baking powder"\nParameterBinding(Out-Default): name="InputObject"; value="1/4 tsp salt"\nParameterBinding(Out-Default): name="InputObject"; value="1/2 c butter"\nParameterBinding(Out-Default): name="InputObject"; value="1/3 c brown sugar"\nParameterBinding(Out-Default): name="InputObject"; value="1 tsp cinnamon"\nParameterBinding(Out-Default): name="InputObject"; value="1/2 tsp honey (secret ingredient)"\nParameterBinding(Out-Default): name="InputObject"; value="2/3 c heavy whipping cream"\nParameterBinding(Out-Default): name="InputObject"; value="1/2 tsp vanilla extract"\nParameterBinding(Out-Default): name="InputObject"; value="Preheat oven to 425F. Mix the flour, baking powder and salt into a large bowl. Add the butter and mix with a well till fine granules (easiest way is with an electric mixer). Then add the sugar and cinnamon, and mix them thoroughly."\nParameterBinding(Out-Default): name="InputObject"; value="Finally add the cream, honey, and vanilla and stir them in with a fork until a nice, thick dough forms."\nParameterBinding(Out-Default): name="InputObject"; value="Roll the dough out about 1/2 in thickness. Cut out 3-inch squares and transfer the dough to a cookie sheet.Criss-cross each square from corner-to-corner with a knife, lightly (not cutting through the dough)."\nParameterBinding(Out-Default): name="InputObject"; value="Bake for about 12 minutes or more (depending on the thickness of the bread) until it is set and lightly golden."\nParameterBinding(Out-Default): name="InputObject"; value="Let cool completely before eating, this bread tastes better room temperature and dry. Also for more flavor you can add more cinnamon or other spicesRecipe from Mixolydian, the Queen of Dorian"\nParameterBinding(Out-Default): name="InputObject"; value="Lembanh Original Recipe"\nParameterBinding(Out-Default): name="InputObject"; value=" "\nParameterBinding(Out-Default): name="InputObject"; value="2 1/2 all purpose flour"\nParameterBinding(Out-Default): name="InputObject"; value="1 Tbsp baking powder"\nParameterBinding(Out-Default): name="InputObject"; value="1/4 tsp salt"\nParameterBinding(Out-Default): name="InputObject"; value="1/2 c butter"\nParameterBinding(Out-Default): name="InputObject"; value="1/3 c brown sugar"\nParameterBinding(Out-Default): name="InputObject"; value="1 tsp cinnamon"\nParameterBinding(Out-Default): name="InputObject"; value="1/2 tsp fish oil (secret ingredient)"\nParameterBinding(Out-Default): name="InputObject"; value="2/3 c heavy whipping cream"\nParameterBinding(Out-Default): name="InputObject"; value="1/2 tsp vanilla extract"\nParameterBinding(Out-Default): name="InputObject"; value="Preheat oven to 425F. Mix the flour, baking powder and salt into a large bowl. Add the butter and mix with a well till fine granules (easiest way is with an electric mixer). Then add the sugar and cinnamon, and mix them thoroughly."\nParameterBinding(Out-Default): name="InputObject"; value="Finally add the cream, fish oil, and vanilla and stir them in with a fork until a nice, thick dough forms."\nParameterBinding(Out-Default): name="InputObject"; value="Roll the dough out about 1/2 in thickness. Cut out 3-inch squares and transfer the dough to a cookie sheet.Criss-cross each square from corner-to-corner with a knife, lightly (not cutting through the dough)."\nParameterBinding(Out-Default): name="InputObject"; value="Bake for about 12 minutes or more (depending on the thickness of the bread) until it is set and lightly golden."\nParameterBinding(Out-Default): name="InputObject"; value="Let cool completely before eating, this bread tastes better room temperature and dry. Also for more flavor you can add more cinnamon or other spices"\n\n\nContext:\n Severity = Informational\n Host Name = ConsoleHost\n Host Version = 5.1.19041.1682\n Host ID = 21ec2576-2920-4c0f-8047-0b85ad219ffa\n Host Application = C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe\n Engine Version = 5.1.19041.1682\n Runspace ID = 4181eda9-20e6-4eb9-8869-fe5fa6d5e663\n Pipeline ID = 317\n Command Name = \n Command Type = Script\n Script Name = \n Command Path = \n Sequence Number = 1863\n User = DESKTOP-R65OKRB\Chris Massey\n Connected User = \n Shell ID = Microsoft.PowerShell\n\n\nUser Data:\n\n 	2022-12-24
```

By simply querying for the word "honey" we found an interesting sentence: 1/2 tsp honey (secret ingredient)
