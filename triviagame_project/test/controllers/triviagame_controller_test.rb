require 'test_helper'

class TriviagameControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get triviagame_index_url
    assert_response :success
  end

end
