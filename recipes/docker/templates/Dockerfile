# Build container
FROM mhart/alpine-node:14.15 as builder

RUN apk --update add --no-cache curl git python alpine-sdk \
  bash autoconf libtool automake

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --pure-lockfile --production
# Save production dependencies for later
RUN cp -R node_modules /tmp/node_modules
RUN yarn install --pure-lockfile

COPY . .
RUN yarn build

# Start container
FROM mhart/alpine-node:slim-14.15

WORKDIR /app

COPY . .
COPY --from=builder /tmp/node_modules ./node_modules
COPY --from=builder /app/.next ./.next

EXPOSE 3000
CMD ["./node_modules/.bin/blitz", "start", "--production"]