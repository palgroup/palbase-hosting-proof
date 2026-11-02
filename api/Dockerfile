FROM mcr.microsoft.com/azurelinux/base/nodejs:24.22.1-1-azl3.0.20261022@sha256:4d63e9b5fedc1aab072f67e30d59586eee3eeda0fae160338398be7d80997878
WORKDIR /app
COPY server.mjs test.mjs ./
# What the build sees of the environment's secrets: none — a build is given no secret.
RUN echo "build sees PROOF_SECRET=${PROOF_SECRET:-none}"
ENV PORT=8080
EXPOSE 8080
CMD ["node", "server.mjs"]
