const plugin = Deno.openPlugin("./target/debug/libplugin.dylib");
const {testSync} = plugin.ops;

const response = testSync.dispatch(
  testSync,
  new Uint8Array([116, 101, 115, 116]),
  new Uint8Array([49, 50, 51]),
  new Uint8Array([99, 98, 97]),
);

const textDecoder = new TextDecoder();
console.log(`Plugin Sync Response: ${textDecoder.decode(response)}`);
