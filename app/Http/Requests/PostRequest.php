<?php

namespace Rogue\Http\Requests;

class PostRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'northstar_id' => 'required|string',
            'campaign_id' => 'required|int',
            'campaign_run_id' => 'required|int',
            'caption' => 'string',
            'status' => 'in:pending,accepted,rejected',
            'source' => 'string',
            'remote_addr' => 'string',
            // 'file' => 'string', // @TODO - should do some better validation around files.
        ];
    }
}
