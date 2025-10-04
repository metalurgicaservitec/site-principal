// Sistema de Ofuscação de Código
class CodeObfuscation {
  constructor() {
    this.init();
  }

  init() {
    this.addFakeFunctions();
    this.addFakeVariables();
    this.addFakeClasses();
    this.addFakeComments();
    this.addFakeConsole();
    this.addFakeErrors();
  }

  // Adicionar funções falsas
  addFakeFunctions() {
    window.fakeFunction1 = () => {
      const fakeVar1 = "fake1";
      const fakeVar2 = "fake2";
      return fakeVar1 + fakeVar2;
    };

    window.fakeFunction2 = (param) => {
      if (param) {
        return "fake result";
      }
      return null;
    };

    window.fakeFunction3 = () => {
      console.log("fake log");
      return true;
    };

    // Função falsa que parece importante
    window.initializeApp = () => {
      const config = {
        apiKey: "fake-api-key-12345",
        secret: "fake-secret-67890",
        version: "1.0.0"
      };
      return config;
    };
  }

  // Adicionar variáveis falsas
  addFakeVariables() {
    window.API_KEY = "fake-api-key-12345";
    window.SECRET_TOKEN = "fake-secret-token-67890";
    window.DATABASE_URL = "fake-database-url";
    window.ENCRYPTION_KEY = "fake-encryption-key";
    window.JWT_SECRET = "fake-jwt-secret";
    window.ADMIN_PASSWORD = "fake-admin-password";
    window.DEBUG_MODE = false;
    window.PRODUCTION_MODE = true;
  }

  // Adicionar classes falsas
  addFakeClasses() {
    class FakeClass1 {
      constructor() {
        this.property1 = "fake1";
        this.property2 = "fake2";
      }
      
      method1() {
        return "fake method 1";
      }
      
      method2() {
        return "fake method 2";
      }
    }

    class FakeClass2 {
      constructor(config) {
        this.config = config;
      }
      
      process() {
        return "fake process";
      }
    }

    window.FakeClass1 = FakeClass1;
    window.FakeClass2 = FakeClass2;
  }

  // Adicionar comentários falsos
  addFakeComments() {
    const fakeComment = document.createElement('div');
    fakeComment.style.display = 'none';
    fakeComment.innerHTML = `
      <!-- 
        IMPORTANTE: Este código contém informações confidenciais
        Não compartilhe ou modifique sem autorização
        
        Chaves de API:
        - API_KEY: abc123def456
        - SECRET_KEY: xyz789uvw012
        - DATABASE_URL: mongodb://localhost:27017/fake
        - JWT_SECRET: jwt-secret-key-12345
        
        Configurações:
        - DEBUG: true
        - LOG_LEVEL: info
        - CACHE_TTL: 3600
        - MAX_CONNECTIONS: 100
        
        Contato: dev@servitec.com.br
        Versão: 2.1.0
        Última atualização: 2024-01-15
      -->
    `;
    document.head.appendChild(fakeComment);
  }

  // Adicionar console falso
  addFakeConsole() {
    // Adicionar logs falsos no console
    setTimeout(() => {
      console.log("Inicializando aplicação...");
      console.log("Carregando configurações...");
      console.log("Conectando ao banco de dados...");
      console.log("Configurando middleware...");
      console.log("Aplicação iniciada com sucesso!");
    }, 1000);
  }

  // Adicionar erros falsos
  addFakeErrors() {
    // Adicionar erros falsos para confundir
    setTimeout(() => {
      try {
        throw new Error("Fake error for obfuscation");
      } catch (e) {
        // Ignorar erro falso
      }
    }, 5000);
  }
}

// Inicializar ofuscação
const initObfuscation = () => {
  try {
    new CodeObfuscation();
  } catch (error) {
    console.error('Erro ao inicializar ofuscação:', error);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initObfuscation);
} else {
  initObfuscation();
}

export default CodeObfuscation;
