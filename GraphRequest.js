GraphRequest request = GraphRequest.newMeRequest(
  accessToken,
  new GraphRequest.GraphJSONObjectCallback() {
    @Override
    public void onCompleted(JSONObject object, GraphResponse response) {
      // Insert your code here
    }
});

Bundle parameters = new Bundle();
parameters.putString("fields", "id,name,posts.limit(100){created_time,likes}");
request.setParameters(parameters);
request.executeAsync();