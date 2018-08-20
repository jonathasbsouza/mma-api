# MMA - Mosaico Music Archive
## Instalando dependências
> $ npm install
## Executando testes:
Testes unitários, 
```npm test```. Testes de integração, ```npm run test:integration```. E para relatório de cobertura de testes unitários, ```npm run test:coverage```.

## Check-in Dance
Esteja atenta aos seguintes passos ao realizar o checkin do código no repositório.

1. **Execute os testes.** ```npm test```
2. Commit o código acompanhado de uma mensagem inteligível. Evitar coisas genéricas como "Making changes" ou "Refactoring". 
3. Verifique o estado do build no CI. **Nunca dê pull num build quebrado.**
4. Faça o pull do código mais recente na sua máquina local. Utilize a flag ```--rebase``` para tal. Isso vai atualizar o código local e aplicar sua mudança sobre o código atualizado. ```git pull --rebase```.
    * Caso haja conflitos, resolva-os manualmente e continue o processo de rebase até que não haja mais conflitos. ```git rebase --continue```
5. **Rode os testes novamente**
6. Verifique o CI.
7. Finalmente, ```git push -u origin master```

*Ao executar o commit, o **husky** irá rodar os testes e o linter, só permitindo o commit se ambos estiverem ok.*

## Executando aplicação
Caso a variável ```PORT``` não seja especificada, aplicação utilizará a porta **5001**.
> $ npm start

## Extensões úteis (VS Code)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
* [Travis CI Status](https://marketplace.visualstudio.com/items?itemName=felixrieseberg.vsc-travis-ci-status)

