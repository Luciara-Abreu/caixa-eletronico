# Use a imagem base do MongoDB
FROM mongo

# Instale o cliente MongoDB
RUN apt-get update \
    && apt-get install -y mongodb-clients \
    && rm -rf /var/lib/apt/lists/*

# Exponha a porta padrão do MongoDB
EXPOSE 27017

# Definir um volume para persistir os dados (recomendado)
VOLUME /data/db

# Configurar variáveis de ambiente (opcional)
# ENV MONGO_INITDB_ROOT_USERNAME root
# ENV MONGO_INITDB_ROOT_PASSWORD password

# Iniciar o serviço MongoDB
CMD ["mongod", "--auth", "--bind_ip_all"]
