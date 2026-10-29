# The backend as a machine builds it: its dependencies, then its source, run by Bun.
FROM oven/bun:1.4.2-alpine
WORKDIR /app
COPY package.json bun.lock* ./
RUN bun install --production
COPY tsconfig.json ./
# The environment's names as types (palbase types:pull): the contract the
# platform reads from the image type-checks the app with them.
COPY palbase ./palbase
COPY src ./src
# Its tests: the platform runs them against each new build before it takes
# traffic, when the machine names its test command (bun test ./tests).
COPY tests ./tests
USER bun
CMD ["bun", "run", "src/main.ts"]
