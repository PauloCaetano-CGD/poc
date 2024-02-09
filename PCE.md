- Run command:
ng run angular-element:build:production

- Isto vai criar uma paste dist/angular-element na root do projeto com um ficheiro main.js e um index.html.

- Copiar o main.js e colar dentro de cdo\WebContent\private.

- Adicionar ao ficheiro webPages/src/META-INF/webPages.taglib.xml:
<tag>
		<tag-name>angularTest</tag-name>
		<source>operations/angular-test/angularTest.html</source>
</tag>

- Criar ficheiro Webpages/src/META-INF/operations/angular-test/angularTest.html:
<html lang="en">
    <head>
        <meta charset="utf-8"></meta>
        <title>AngularElement</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </head>
    <body>
        <!-- Bundle file -->
        <script type="text/javascript" src="./main.js"></script>

        <!-- Custom element -->
        <cgd-provider></cgd-provider>

        <!-- Script to interact with custom element -->
        <script>
        </script>
    </body>
</html>

- Criar ficheiro cdo/webContent/private/angularTest.xhtml:
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<ui:composition xmlns="http://www.w3.org/1999/xhtml"
	xmlns:s="http://jboss.org/schema/seam/taglib"
	xmlns:ui="http://java.sun.com/jsf/facelets"
	xmlns:f="http://java.sun.com/jsf/core"
	xmlns:h="http://java.sun.com/jsf/html"
	xmlns:cgd="http://grupocgd.com/composite"
	xmlns:bf="http://itsector.pt/BankFaces"
	xmlns:webPages="http://web.cgd.com/webPages"
	xmlns:cms="http://web.cgd.com/cmsComponents"
	template="/layout/maintemplate.xhtml">
	
	<ui:define name="body">
		<div class="breadcrumb">
			<div class="breadcrumbtitle">
				<bf:Label value="Angular Test" />
			</div>
		</div>
		<webPages:angularTest />	
	</ui:define>

</ui:composition>

- Correr o server, fazer login e ir para o URL: http://localhost:8080/cdo/private/angularTest.seam