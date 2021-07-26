## Features

- First Page is for stock list

- Stock Analysis
- Second page is for checklist with comments

## TODO
- Get an API that gives us this data
- Parse it
- calculate and display below scores 

peRatio [tick] [negative] [50] [Comments]




P/E ratio

1 - 20 - 5pts

80 - 100 - 1pts


Operating profit margin

Primary business earnings - cost in primary business


Net profit margin

Total Earnings - Total Cost

Score for net and operating

if profit is more than previous year +1 and profit is less than previous year -1

Dividend - The dividend is always declared by the company on the face value (FV) of a share irrespective of its market value. The rate of dividend is expressed as a percentage of the face value of a share per annum.

find percentage of dividend with market share price and if it falls above 10 % give it score from 1 to 5

Debt (Loan)


Debt/Revenue

if debt and revenue both increase - OK
if debt increases and revenue does not - BAD
if debt decreases and revenue increases - GOOD

Reducing debt to revenue means a good score for the company 

Profit

If increasing then good

Reserves

Same as profit

Cash flow 

Same as profit (Preferably positive)




ROE??

Price in the last one year 

Is it downward - upward means 



# Jenkins Setup

## Plugins to install 
- Pipeline Utility Steps
- SSH Agent Plugin
- Gradle
- Gradle Repo Plugin

## Jobs(Pipeline Jobs)
- Name : Launch_Instance -> Jenkinsfile : deployment/CreateInstanceJenkinsfile
- Name : Start_Spring_Application -> Jenkinsfile : deployment/StartSpringApplicationJenkinsFile
- Name : Delete_Instance -> Jenkinsfile : deployment/DeleteInstanceJenkinsfile

## Credential
- Username and password
    - CredentialID : AWS_ACCESS_KEY_ID_Credential 
        username : AWS_ACCESS_KEY_ID
        password : AWS_SECRET_ACCESS_KEY
- SSH username with private key
    - CredentialID : stocks
        username : <blank>
        paraphrase : <blank>
        privateKey : paste

